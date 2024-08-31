const express = require("express");

const port = 3232;

const app = express();

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen (port , (err)=>{
    err ? console.log(err) : console.log(`server start on port ${port}`)
})


