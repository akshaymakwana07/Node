const mongoose = require ("mongoose");


mongoose.connect("mongodb://localhost:27017/app-1")


const db = mongoose.connection;

db.on ("connected",()=>{
    console.log("database connected")
})