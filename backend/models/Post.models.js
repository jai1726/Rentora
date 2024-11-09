const mongoose =require('mongoose');

const postSchema= new mongoose.Schema({
    description:{
        type:String,
        required:true
       },
       images:{
        type: [String],   // Array of strings to store image URLs
        validate: [arrayLimit, '{PATH} must have exactly 3 images'],
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
function arrayLimit(val) {
    return val.length === 3; // Ensures the array has exactly 3 elements
}
const Post= mongoose.model("Post",postSchema);
module.exports = Post;