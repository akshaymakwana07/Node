const express = require("express");

const port = 3232;

const app = express();

const db = require("./config/database")

const crudSchema = require("./model/crudSchema")

app.set("view engine","ejs")

app.get("/",async(req,res)=>{
    let data = await crudSchema.find({});
    data ? res .render("index",{data}) : console .log("data not found")
})

app.listen (port , (err)=>{
    err ? console.log(err) : console.log(`server start on port ${port}`)
})


