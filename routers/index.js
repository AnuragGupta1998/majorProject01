const express=require('express');

const router=express.Router();

const users=require('./users')//requiring users.js for another router


// express controllers.............
const homeController=require("../controllers/home_controller")



console.log("router Loaded");

//home router.......
router.get('/home',homeController.home);

//any further route access from here.......
//router.use('/routerName',routerFileName)
router.use('/user',users); //middleware calling another router




//exporting router
module.exports=router;