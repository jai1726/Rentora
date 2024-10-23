const mongoose = require('mongoose');
const Post = require('../models/Post.models.js');
const User = require('../models/User.models.js');



const deletePost = async (req, res, next) => {
    // const {user}=re.body;
    const postId = req.params.id.trim();
    let post;

    try {
        // Find the post and populate the 'user' field
        console.log(postId)
        post = await Post.findById(postId).populate('user');
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Remove the post reference from the user's posts array
        const user = post.user;
        user.posts.pull(post._id); // Use post._id instead of post object
        await user.save();

        // Delete the post
        await Post.findByIdAndDelete(postId);

        res.status(200).json({ message: "Successfully deleted" });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Unable to delete" });
    }
}
module.exports=deletePost;