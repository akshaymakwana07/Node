const express = require("express");

const routes = express.Router();

const adminCtl = require ("../controllers/adminCtl")


const uploadpic = require ("../middlaware/multer.js")

routes.get("/movi", adminCtl.home)
routes.get("/book",adminCtl.book)
routes.get("/",adminCtl.abt)
routes.post("/insert",uploadpic,adminCtl.insert)
routes.get("/deleteData",adminCtl.deleteData)
routes.get("/editData",adminCtl.editData)
routes.post("/updateData",uploadpic,adminCtl.updateData)


module.exports = routes;