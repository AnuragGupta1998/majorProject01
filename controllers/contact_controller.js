module.exports.contact=function(req,res){
    return res.end("<h1> User Contact </h1>");
}

module.exports.contactDate=function(req,res){
    return res.end(`${Date()}`);
}
