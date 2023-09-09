const express=require('express');

const router=express.Router();

const users=require('./users')//requiring users.js for another router

const userSignUpIn=require('./userSignUpIn'); //router that handle with signUp/In


// express controllers.............
const homeController=require("../controllers/home_controller")



console.log("router Loaded");

//home router.......
router.get('/home',homeController.home);  //homeController define home function(action)


//any further route access from here.......
//router.use('/routerName',routerFileName)
router.use('/user',users); //middleware calling another router


//user sign up in router
router.use('/',userSignUpIn);




//exporting router
module.exports=router;
