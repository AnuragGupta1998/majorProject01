

var Person=[{
    name:'Anu',
    age:18
}];



module.exports.detail=function(req,res){
    return res.render('home',{title:"HOME EJS FILE RENDERING"});
    // return res.end("<h1>Users Details</h1>");
}

module.exports.person=function(req,res){
    console.log(req.body);
   Person.push({
    name:req.body.name,
    age:req.body.age
   });

    return res.render('home',{title:"About Person",perArr:Person});
}