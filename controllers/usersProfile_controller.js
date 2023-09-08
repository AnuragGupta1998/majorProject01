const User=require('../models/user'); //models

module.exports.profile=function(req,res){
    if(req.cookies.user_id){
        console.log('cookies is present');

    }else{
        return res.redirect('/userSignIn');
    }

    return res.render('user_profile',{title:"User_Profile",userData:User});
}
