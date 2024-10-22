const express = require('express');
const authenticateToken = require('../middleware/auth');
const addPost=require('../controllers/addPost');


const postRouter=express.Router();


postRouter.post('/add',authenticateToken,addPost);
module.exports=postRouter;