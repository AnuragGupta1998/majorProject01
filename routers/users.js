const express=require('express')
const router=express.Router();
const userProfileController=require('../controllers/usersProfile_controller');//require profile controller
const userAbout=require("../controllers/about_controller");// require about controller

//profile router.....
router.get('/profile',userProfileController.profile);

//about router....
router.get('/about',userAbout.about)

module.exports=router;