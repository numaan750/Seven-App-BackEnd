const  express = require("express");

const { createworkwithusmodels, updateworkwithusmodels, deleteworkwithusmodels, getworlwithusmodels } = require("../controllers/workwithuscontroller");

const routers = express.Router();


routers.get("/workwithusmodels", getworlwithusmodels);
routers.post("/workwithusmodels", createworkwithusmodels);
routers.put("/workwithusmodels/:id", updateworkwithusmodels);
routers.delete("/workwithusmodels/:id", deleteworkwithusmodels);


module.exports = routers