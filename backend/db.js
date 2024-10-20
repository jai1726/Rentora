const express=require('express');
const mongoose =require('mongoose');

const connectDB = async() => {
try{
   let connection=await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_Name}`);
   if(connection){
    console.log("MongoDB is connected");
   }
}catch(err){
    console.log(err,"error in connecting to mongoDB");
}


}

module.exports=connectDB;