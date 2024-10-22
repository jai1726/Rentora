const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User.models.js');
const bcrypt=require('bcrypt');

 const signUp = async (req, res, next) => {
    console.log("request recieved");
    console.log(req.body);
    const { email, name, password, phoneNo } = req.body;
    if (!email || !name || !password || !phoneNo) {
        return res.status(404).json({ message: "Enter all fields" });
    }
    let existingUser;
    try {
        existingUser =await User.findOne({email});
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Try again" });
    }

    if (existingUser) return res.status(200).json({ message: "User already , Instead Login " });

    const saltRounds = 10;
    let hashedPassword=bcrypt.hashSync(password,saltRounds);

    const user = new User({
        email, 
        name,
        password:hashedPassword,
        phoneNo,
        posts:[]
    });

    try {
        await user.save();
    } catch (err) {
        return res.status(404).json({ message: "please Try again" });
    }

    return res.status(200).json({ user });

}
module.exports=signUp;