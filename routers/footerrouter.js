const express = require("express");
const { getfootermodels, createfootermodels, updatefootermodels, deletefootermodels } = require("../controllers/footercontroller");

const routers = express.Router();

routers.get("/footermodels", getfootermodels);
routers.post("/footermodels", createfootermodels);
routers.put("/footermodels/:id", updatefootermodels);
routers.delete("/footermodels/:id", deletefootermodels);



module.exports = routers
