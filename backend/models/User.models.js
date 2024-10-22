const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    email:{
    type:String,
     required:true,
     unique:true
    },
    name:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    phoneNo:{
        type:String,
        required:true
    },
    posts:[{
        type:mongoose.Types.ObjectId,
        ref:"Post",
        required:true
    }]
}) 
const User=mongoose.model("User",userSchema);
module.exports = User;