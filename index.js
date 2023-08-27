const express=require('express');
const port=8004;
const app=express();
const router=require('./routers') //required routers


//Use express router middleware.................
app.use('/',router);





// simple route (/home)..................
app.get('/simple',(req,res)=>{
    return res.send(`<h1>Home Page Of Major Project Simple ${0+1}</h1>`);9
})


//server listining on port 8004
app.listen(port,(err)=>{
    if(err){
      console.log(`Error while connection to server ${err}`); //using interpolation(backtick)
      return;
    } 

    console.log(`Server is up and running on port- ${port}`);

});