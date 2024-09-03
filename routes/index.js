const express = require("express");

const routes = express.Router();

const adminCtl = require("../controllers/adminCtl")

routes.get("/",adminCtl.header)

routes.get("/about",adminCtl.about)

routes.get("/contect",adminCtl.contect)


module.exports = routes;