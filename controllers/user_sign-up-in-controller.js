const User=require('../models/user'); //models


module.exports.userSignup=function(req,res){
    return res.render('user_sign_up',{title:'user_signup'});
}

module.exports.userSignin=function(req,res){
    return res.render('user_sign_in',{title:'user_signin'});
}

//get the SignUp data..................................................

//by try catch method
// module.exports.createUser= async(req,res)=>{
//     console.log(req.body,"********01");
//     if(req.body.password != req.body.confirm_password){
//         console.log('passwords does not match');
//         return res.redirect('back');
//     }
   
    
//     try{
//         const data = await User.findOne({email: req.body.email});
        
//         if(!data){
//             User.create(req.body);
//             console.log('a new user has been logged');
//             return res.redirect('/userSignin');
//         }else{
//             console.log('user already exists with this userId');
//             return res.status(409).json({error:"User with this emailId alreday exist in database"});
//             // return res.redirect('/users/signup');
//         }
//     }catch(e){
//         console.log("Error",e.message);
//         return res.status(500).json({
//             error:"error in signup/Internal server"
//         })
//     }
// }

//By then catch function
module.exports.createUser=function(req,res){

    //checking password with confirm_password
    if(req.body.password != req.body.confirm_password){
        console.log("password did not matching confirm_password");
        return res.redirect('back');
    }

    User.findOne({email:req.body.email}).then(user=> {
        if(!user){

            console.log("User Not Found in Db");

            User.create(req.body);
            console.log("user created");
            return res.redirect('/userSignin');
        }

        else{
            console.log('user already in DB');
            return res.redirect('/userSignin');
        }
    }).catch(err=>console.log(err));
}
    
//get sign in data
module.exports.createUserSession=function(req,res){

}