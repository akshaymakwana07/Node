const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/pr");

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : confirm.log ("database connected")
});


module.exports = db;