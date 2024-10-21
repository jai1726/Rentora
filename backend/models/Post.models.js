const mongoose =require('mongoose');

const postSchema= new mongoose.Schema({
    description:{
        type:string,
        required:true,
        unique:true
       },
       location:{
           type:string,
           required:true 
       },
       rent:{
        type:string,
        required:true
       },
       contactInfo:{
           type:string,
           required:true,
           length:10
       }
})
const Post= mongoose.model("Post",postSchema);
module.exports = Post ;