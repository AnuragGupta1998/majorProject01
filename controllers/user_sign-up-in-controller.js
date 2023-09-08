const User=require('../models/user'); //models



module.exports.userSignup=function(req,res){
    return res.render('user_sign_up',{title:'user_signup'});
}

module.exports.userSignin=function(req,res){
    return res.render('user_sign_in',{title:'user_signin'});
}

//get the SignUp data..................................................

//By then catch function
module.exports.createUser=function(req,res){

    //checking password with confirm_password
    if(req.body.password != req.body.confirm_password){
        console.log("password did not matching confirm_password");
        return res.redirect('back');
    }
    
    User.findOne({email:req.body.email}).then((usr)=>{
        if(!usr){
            console.log("New User Sign Up",req.body.name);

            User.create(req.body);  //creating user into database
            console.log("user created");
            return res.redirect('/userSignin'); 
        }
        else{
            console.log("User Already Present in DB");
            return res.redirect('/userSignIn')
        }
    }).catch(e=>console.log(e));
}

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


    
//get SignIn in data....................................................
module.exports.createUserSession=async function(req,res){

    User.findOne({email:req.body.email}).then((usr)=>{
         //if user password not found
        if(usr.password!=req.body.password){
            console.log("Password did not match please re-enter your password");
            return res.redirect('/userSignIn');
        }
        //if password is correct
        res.cookie('user_id',usr.id);
        return res.redirect('/profile');
    }).catch(e=>{
        console.log("Email Not Found please SignUp");
         return res.redirect('/userSignUp');
    });
    
}

//profile controller..........................................
module.exports.profile= function(req,res){
    //check wether user id present or not into cookies
    console.log('inside profile the cookies',req.cookies);

    //if cookies is present of user by the header name that set inside createUsersession
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id).then((val)=>{
            if(val){
                 console.log('User Login=',val.name);
                //rendering sign_In_Profile of User
                return res.render('sign_In_Profile',{title:'User has been Sign_In into Profile',userId:val})
            }
        }).catch(e=>console.log(e));
    }
    //if cookies of user not present
    else{
        console.log('user has been logout please re login');
        return res.redirect('/userSignIn')
    }

    
}

//logout from profile...............................
module.exports.logoutProfile=function(req,res){

    User.findById(req.cookies.user_id).then((val)=>{
        console.log('User',val.name,'LogOut from Profile');
    res.clearCookie('user_id');

     return res.redirect('/userSignIn');
    });

    // console.log(user_id.body.name);
    // res.clearCookie('user_id');

    //  return res.redirect('back');
    // return res.redirect('/userSignIn')
   // return res.redirect('back')

    // return res.render('sign_In_Profile');

//    User.findById(req.cookies.user_id).then((value)=>{
//     console.log('inside logout then',value);
//     if(value){
//         res.clearCookie('user_id')
//         return res.redirect('/userSignIn');
//     }
//     else{
//         return res.redirect('/userSignUp');
//     }

// }).catch(e=>console.log(e));
}












