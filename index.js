const express=require('express');
const port=8004;
const app=express();

app.get('/home',(req,res)=>{
    return res.send(`<h1>Home Page Of Major Project ${0+1}</h1>`);9
})

app.listen(port,(err)=>{
    if(err){
      console.log(`Error while connection to server ${err}`); //using interpolation(backtick)
      return;
    } 

    console.log(`Server is up and running on port- ${port}`);

});