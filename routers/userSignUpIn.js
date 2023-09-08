const express=require('express')
const router=express.Router();

const uSignUpIn=require('../controllers/user_sign-up-in-controller');

router.get('/userSignUp',uSignUpIn.userSignup);

router.get('/userSignIn',uSignUpIn.userSignin);

router.get('/profile',uSignUpIn.profile) //profile page of user after signIn

router.get('/logout',uSignUpIn.logoutProfile) //logout from profile page

router.post('/create-User',uSignUpIn.createUser)
router.post('/create-User-Session',uSignUpIn.createUserSession)



module.exports=router;