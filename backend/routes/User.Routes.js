const express = require('express');
const signUp=require('../controllers/signUp');
const login=require('../controllers/login');
const router=express.Router();


router.post('/signup',signUp);
router.post('/login',login);
// router.post('/login',login);
module.exports=router;