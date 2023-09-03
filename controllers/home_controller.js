module.exports.home = function(req,res){

    console.log(req.cookies);
    res.cookie('Anurag',100);
    res.cookie('Aurag',200);
    // console.log(req.cookies);

    return res.render('home',{title:"MainHome Ejs Pages"});
}