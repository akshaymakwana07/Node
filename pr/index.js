 const express = require ("express");

 const app = express();

  app.use(express.urlencoded());

  var stdData = [
    {
        id : 1,
        name:"akshay",
    }
  ];

  app.set("view engine","ejs")
  app.get ("/",(req,res)=>{
    res.render("index",{
        std:stdData,
    });
  });

  app.post("/insertData",(req,res)=>{
    const{id,name} = req.body;
    let object = {
        id:id,
        name:name,
    };
    stdData.push(object);
    res.redirect("/")
  })

  app.get("/deleteData",(req,res)=>{
    const id = req.query.userid;
    const data = studentData.filter((el,i)=>{
        return el.id != id;
    });
    studentData = data;
    res.redirect("back")
})

 app.listen (7777,()=>{
    console.log("server listen")
 })