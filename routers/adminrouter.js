const express = require("express")
const { loginadminmodels } = require("../controllers/admincontroller");


const routers = express.Router();

routers.post("/adminmodels", loginadminmodels);

module.exports = routers