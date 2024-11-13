const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/Post.models.js');
const User = require('../models/User.models.js');

const addPost=async(req,res,next)=>{
    console.log("addpost")
    const pics = req.files;
    console.log(pics);
    if (!pics || pics.length !== 3) {
      return res.status(400).json({ message: 'Exactly three images are required' });
    }

    // Extract URLs from uploaded images
    const images = pics.map(image => image.path);
    console.log(typeof(images));
// console.log(req.files);
const {description,city,area,location,rent,contactInfo}=req.body;
const user=req.userId;
// console.log(user);
// console.log(req.body);
if (!description|| !city || !area || !location|| !rent|| !contactInfo|| !user) {
    return res.status(404).json({ message: "Enter all fields" });
}

let existingUser;
try {
    existingUser =await User.findById(user);
} catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Try again" });
}
if(!existingUser)return res.status(404).json({message:"User Not exist,Login instead"});

const post=new Post({
    description,
    images,
    city,
    area,
    location,
    rent,
    contactInfo,
    user
})

try{
   const session=await mongoose.startSession();
   session.startTransaction();
   await post.save({session});
   existingUser.posts.push(post);
   await existingUser.save({ session });
   await session.commitTransaction();
   session.endSession();

}catch(err){
 console.log(err);
 return res.status(500).json({message:"error in posting,try again"})
}
return res.status(200).json({post});
}

module.exports=addPost;