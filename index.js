const express=require('express');
const port=8004;
const path=require('path')
const app=express();

const expressLayout=require('express-ejs-layouts');//express-ejs-layout required to render layout

const router=require('./routers') //required routers

app.use(express.static('assets'));

//use layout middleware
app.use(expressLayout)

//extract style and script from sub pages of the layout.ejs inside views....
app.set('layout extractStyles' ,true);
app.set('layout extractScripts' ,true);

//read form data
app.use(express.urlencoded());



//Use express router middleware.................
app.use('/',router);


//view engine setup..........................
app.set('view engine','ejs');
app.set('views','./views')
// app.set('views',path.join(__dirname,'views'));


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