const express = require("express")

const app = express();
app.use(express.urlencoded());

var studentData = [
    {
        id: 1,
        name: "akshay",
    },
    {
        id: 2,
        name: "parth",
    }
];

app.set ("view engine", "ejs")
app.get ("/",(req,res)=>{
    res.render("index", {
        student:studentData,
    });
});


app.post("/insertData", (req,res)=>{
    const {id,name} = req.body;
    let obj = {
        id: id,
        name: name,
    };

    studentData.push(obj);
    res.redirect("/");
});

app.get("/deleteData",(req,res)=>{
    const id = req.query.userid;
    const data = studentData.filter((el,i)=>{
        return el.id != id;
    });
    studentData = data;
    res.redirect("back")
})


app.get ("/editData", (req,res)=>{
    const userid = req.query.userid
    const data = studentData.filter((el,i)=>{
        return el.id == userid;
    });

  return  res.render("edit" , {
        editdata:data[0],
    })
})

app.post("/updateData", (req, res) => {
    const { id, name } = req.body;
    const studentIndex = studentData.findIndex(el => el.id === parseInt(id));
    if (studentIndex !== -1) {
        studentData[studentIndex].name = name;
    }
    res.redirect("/");
});

app.listen(4545,()=>{
    console.log ("server listen")
})






