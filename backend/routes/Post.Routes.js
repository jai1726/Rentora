const express = require('express');
const authenticateToken = require('../middleware/auth');
const addPost=require('../controllers/addPost');
const deletePost=require('../controllers/deletePost');
const multer = require('multer');
const { storage } = require('../middleware/multerAuth'); 
const addToWishlist=require('../controllers/addToWishlist');
const wishList=require('../controllers/wishlist');
const posts=require('../controllers/posts');
const upload = multer({ storage });

const postRouter=express.Router();


postRouter.post('/add',authenticateToken,upload.array('images', 3),addPost);
postRouter.delete('/delete/:id',authenticateToken,deletePost);
postRouter.post('/addtowishlist/:id',authenticateToken,addToWishlist);
postRouter.get('/wishlist',authenticateToken,wishList);
postRouter.get('/posts', authenticateToken, posts);

module.exports=postRouter;