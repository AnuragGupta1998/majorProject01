const express=require('express');

const router=express.Router();

const users=require('./users')
// express controllers.............
const homeController=require("../controllers/home_controller")



console.log("router Loaded");

//home router
router.get('/home',homeController.home);

router.use('/user',users); //middleware calling another router



//exporting router
module.exports=router;