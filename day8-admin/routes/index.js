const express = require("express");

const routes = express.Router();

const adminCtl = require ("../controllers/adminCtl")

routes.get("/", adminCtl.admin)
routes.get("/teble",adminCtl.teble)



module.exports = routes;