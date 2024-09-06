const express = require("express");
const movieApl = require("./model/movieSchema");
const routes = require("./routes/index")
const port = 7777;
const path=require("path")

const app = express();

app.use(express.urlencoded({extended:false}))

const db = require("./config/database")
const movieSchema = require("./model/movieSchema")
// const fs = require ("fs");

app.set("view engine","ejs");

app.use ("/",routes);

app.use("/uploads",express.static(path.join(__dirname,'uploads')))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started on port ${port}`)
})
