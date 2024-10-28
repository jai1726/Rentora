const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();
console.log("hello raam");
// Configure Cloudinary with environment variables
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
console.log("lolo");
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Dynamic folders', 
    allowed_formats: ['jpg', 'jpeg', 'png'], 
  },
});

module.exports = { cloudinary, storage };

