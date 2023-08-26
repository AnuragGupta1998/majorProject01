const express=require('express');

const router=express.Router();

const homeController=require("../controllers/home_controller")

console.log("router Losded");

//home router
router.get('/home',homeController.home);






module.exports=router;