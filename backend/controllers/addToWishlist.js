const mongoose = require('mongoose');
const Post = require('../models/Post.models.js');
const User = require('../models/User.models.js');

const addToWishlist=async(req,res,next)=>{
    const user=req.userId;
    const postId = req.params.id.trim();

    let existingUser;
try {
    existingUser =await User.findById(user);
} catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Try again" });
}
if(!existingUser)return res.status(404).json({message:"User Not exist,Login instead"});

let post;
try{
    post=await Post.findById(postId);
    existingUser.wishList.push(post);
    await existingUser.save();
}catch(err){
    return res.status(400).json({message:"post not found"});
}
return res.status(200).json({message:"wishListed"});
}
module.exports=addToWishlist;