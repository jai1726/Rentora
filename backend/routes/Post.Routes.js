const express = require('express');
const authenticateToken = require('../middleware/auth');
const addPost=require('../controllers/addPost');
const deletePost=require('../controllers/deletePost');

const postRouter=express.Router();


postRouter.post('/add',authenticateToken,addPost);
postRouter.delete('/delete/:id',authenticateToken,deletePost);
module.exports=postRouter;