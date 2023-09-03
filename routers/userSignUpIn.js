const express=require('express')
const router=express.Router();

const uSignUpIn=require('../controllers/user_sign-up-in-controller');

router.get('/userSignup',uSignUpIn.userSignup);

router.get('/userSignin',uSignUpIn.userSignin);


router.post('/create-User',uSignUpIn.createUser)
router.post('/create-User-Session',uSignUpIn.createUserSession)


module.exports=router;