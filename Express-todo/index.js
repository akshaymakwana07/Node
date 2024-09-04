
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

let studentData = [
    { id: 1, name: "akshay" },
    { id: 2, name: "parth" }
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { student: studentData });
});

app.post("/insertData", (req, res) => {
    const { id, name } = req.body;
    let obj = { id: parseInt(id), name };
    studentData.push(obj);
    res.redirect("/");
});

app.get("/deleteData", (req, res) => {
    const id = parseInt(req.query.userid);
    studentData = studentData.filter(el => el.id !== id);
    res.redirect("back");
});

app.get("/editData", (req, res) => {
    const id = parseInt(req.query.userid);
    const data = studentData.find(el => el.id === id);
    if (data) {
        res.render("edit", { data });
    } else {
        res.status(404).send("Student not found");
    }
});

app.post("/updateData", (req, res) => {
    const { id, name } = req.body;
    const studentId = parseInt(id);
    const student = studentData.find(el => el.id === studentId);
    if (student) {
        student.name = name;
    }
    res.redirect("/");
});

app.listen(7000, () => {
    console.log("server listen");
});
