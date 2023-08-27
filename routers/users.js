const express=require('express')
const router=express.Router();
const userProfileController=require('../controllers/usersProfile_controller');//require profile controller
const userAbout=require("../controllers/about_controller");// require about controller
const detail=require('../controllers/userDetail')

const contactC=require('../controllers/contact_controller');
// const {contact_controller,contDate}=require('../controllers/contact_controller')

//profile router.....
router.get('/profile',userProfileController.profile);

//about router....
router.get('/about',userAbout.about)

router.get('/contact',contactC.contact);
router.get('/contDate',contactC.contactDate);

router.get('/detail',detail.detail);

module.exports=router;