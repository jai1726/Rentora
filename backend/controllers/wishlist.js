const mongoose = require('mongoose');
const Post = require('../models/Post.models.js');
const User = require('../models/User.models.js');

const wishList=async(req,res,next)=>{
const user=req.userId;

let existingUser;
try {
    existingUser =await User.findById(user);
} catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Try again" });
}
if(!existingUser)return res.status(404).json({message:"User Not exist,Login instead"});

let List;
try{
    List = await User.findById(user).populate('wishList');
   let wList=List.wishList;
   return res.status(200).json({wList});

}catch(err){
return res.status(400).json({message:"error in fetching"})
}
}
module.exports=wishList