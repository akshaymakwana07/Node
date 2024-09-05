const express = require("express");
const port = 7879;

const app = express();

const db = require("./config/database")

// const crudSchema = require("./model/crudSchema")

const multer = require("multer")

const path = require ("path")

const fs = require ("fs");


app.use(express.urlencoded());

app.set("view engine","ejs")

app.use ("/",require("./routes"));  

app.use("/",express.static(path.join(__dirname,"public")))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started on port ${port}`)
})