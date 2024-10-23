const mongoose =require('mongoose');

const postSchema= new mongoose.Schema({
    description:{
        type:String,
        required:true,
        unique:true
       },
       images:{
        type:String,
        required:true 
       },
       location:{
           type:String,
           required:true 
       },
        rent:{
        type:String,
        required:true
       },
       contactInfo:{
           type:String,
           required:true,
           length:10
       },
       user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
       }
})
const Post= mongoose.model("Post",postSchema);
module.exports = Post;