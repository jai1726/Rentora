const Post = require('../models/Post.models.js');

const posts = async (req, res) => {
    const {location} = req.query; // Access query parameters

    if (!location) {
        return res.status(400).json({ message: 'Locationare required' });
    }
let posts;
    try {
        posts = await Post.find({location });
        
        if (!posts.length) {
            return res.status(404).json({ message: 'No posts found for the specified location' });
        }
        
        return res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching posts, try again later' });
    }
};

module.exports = posts;