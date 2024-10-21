const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User.models.js');
const bcrypt=require('bcrypt');

 const login=async(req,res,next)=>{
   const {email,password}=req.body;

   if (!email || !password) {
    return res.status(404).json({ message: "Enter all fields" });
}

   let existingUser;
   try{
    existingUser=await User.findOne({email});
   }catch(err){
    return console.log(err);
   }
   if(!existingUser)res.status(404).json({message:"User Not exist,Login instead"});

   const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password);
   if(!isPasswordCorrect){
      return res.status(404).json({messsage:"wrong password"})
   }
return res.status(200).json({message:"login Successful"});
 }
 module.exports=login;