const { query } = require("express")
const movieApl=require("../model/movieSchema")
const multer = require("multer")
const path = require("path")
const fs = require ("fs");
module.exports.home = (req,res) => {
    res.render("home")
},

module.exports.book = (req,res) => {
    res.render("book")
}

module.exports.abt = async(req,res)=>{
    try{
        let data = await movieApl.find({});
        res.render("home",{data})
    }catch(err){
        console.log( err +"data not found")
    }

}

module.exports.insert =  async(req,res)=>{
    try{
        console.log(req.body)
        let data = await movieApl.create(req.body);
        res.redirect("/")
    }catch(err){
        console.log(err +"data not submitted")
    }
}

module.exports.deleteData = async(req,res) =>{
    try{
        let deleteData = await movieApl.findByIdAndDelete(req.query.id);
        res.redirect("back")
    }catch(err){
        console.log(err +"data not deleted")
    }
}

module.exports.editData = async(req,res) =>{
    try{
        let singleData = await movieApl.findById(req.query.id);
        res.render("edit",{singleData})
    }catch(err){
        console.log(err+ "data not edited")
    }
}

module.exports.updateData = async(req,res)=>{
    try{
        let update = await movieApl.findByIdAndUpdate(req.query.id,req.body) 
        res.redirect("/")
    } catch(err){
        console.log(err + "data not updated")
    }
}
 


