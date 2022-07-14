const express=require("express");

const app=express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("register");
})
app.post("/", function(req,res){
    res.redirect('/login');
})

app.get("/login",function(req,res){
    res.render("login");
})
app.post("/login", function(req,res){
    res.redirect('/fp');
})

app.get("/fp",function(req,res){
    res.render("facebookpage");
})
app.post("/fp", function(req,res){
    res.redirect('/delete');
})

app.get("/delete",function(req,res){
    res.render("delete");
})

app.post("/delete", function(req,res){
    res.redirect('/check');
})

app.get("/check",function(req,res){
    res.render("facebookChat");
})

app.listen(3000,function(){
    console.log("Server started at port 3000");
})