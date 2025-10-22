const express = require ("express");
const { getblogmodels, createblogmodels, updateblogmodels, deleteblogmodels } = require("../controllers/blogcontrollers");


const  routers = express.Router();

routers.get("/blogmodels", getblogmodels);
routers.post("/blogmodels", createblogmodels);
routers.put("/blogmodels/:id", updateblogmodels);
routers.delete("/blogmodels/:id", deleteblogmodels);

module.exports = routers
