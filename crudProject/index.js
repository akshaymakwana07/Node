const express = require("express")

const port = 8780;


const app = express();

const db = require("./config/database")


const crudAPl = require("./model/crudSchema");

app.use(express.urlencoded());

app.set("view engine","ejs")



app.get ("/",async(req,res)=>{
    let data = await crudAPl.find({});
    data ? res.render("index",{data}) : console.log("data not found")
})

app.post("/insert",async(req,res)=>{
    console.log(req.body)
    let data = await crudAPl.create(req.body);
    data ? res.redirect("back") : console.log ("data not submitted")
})

app.get("/deleteData",async(req,res)=>{
    let deleteData = await crudAPl.findByIdAndDelete(req.query.id);
    deleteData ? res.redirect("back") : console.log("data not deleted")
})


app.get("/editData",async(req,res) =>{
    let singleData = await crudAPl.findById(req.query.id);
    singleData ? res.render("edit",{singleData}) :console.log("data not found")
} )


app.post("/updateData",async(req,res)=>{
    console.log(req.body)
    console.log(req.query.id)
    let update = await crudAPl.findByIdAndUpdate(req.query.id,req.body);
    update ? res.redirect("/") : console.log("data not updated")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`server started on port ${port}`)
})