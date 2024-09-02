const express = require("express");
const port = 7878;

const app = express();

const db = require("./config/database")

const crudSchema = require("./model/crudSchema")

const multer = require("multer")

const path = require ("path")

const fs = require ("fs");


app.use(express.urlencoded());

app.set("view engine","ejs")

app.get ("/",async(req,res)=>{
    let data = await crudSchema.find({});
    data ? res.render("index",{data}) : console.log("data not found")
})

const Storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb (null,"uploads/")
    },
    filename : (req,file,cb)=>{
       
        cb(null,file.fieldname +"-"+ Date.now());
    }
})

const uploadpic = multer({storage:Storage}).single("Image");

app.use("/uploads",express.static(path.join(__dirname,"uploads")))



app.post("/insert",uploadpic,async(req,res)=>{
    req.body.Image = req.file.path
    console.log(req.body)
    let data = await crudSchema.create(req.body);
    data ? res.redirect("back") : console.log ("data not submitted")
})

app.get("/deleteData",async(req,res)=>{
    let singleData = await crudSchema.findById(req.query.id);
    fs.unlinkSync(singleData.Image);
    let deleteData = await crudSchema.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("back") : console.log("data not deleted")
})


app.get("/editData",async(req,res) =>{
    let singleData = await crudSchema.findById(req.query.id);
    singleData ? res.render("edit",{singleData}) :console.log("data not found")
} )


app.post("/updateData",uploadpic,async(req,res)=>{
    let singleData = await crudSchema.findById(req.query.id);
    req.file ? img = req.file.path : img = singleData.Image;
    if(req.file){
        fs.unlinkSync(singleData.Image);
    }
    req.body.Image = img

    
    console.log(req.body)
    console.log(req.query.id)
    let update = await crudSchema.findByIdAndUpdate(req.query.id,req.body);
    update ? res.redirect("/") : console.log("data not updated")
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started on port ${port}`)
})