const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

 },{timestamps:true} //for time created and modified the DB
);

const userDetail=mongoose.model("User_Detail_DB",userSchema);

module.exports=userDetail;