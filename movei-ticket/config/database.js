const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movie-ticket");

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("database connected")
})


mongoose.exports = db;