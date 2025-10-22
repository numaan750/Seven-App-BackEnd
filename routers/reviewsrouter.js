const express = require("express");
const { createreviewsmodels, updatereviewsmodels, deletereviewsmodels, getreviewsmodels, getreviewbyid } = require("../controllers/reviewscontroller");

const routers = express.Router();


routers.get("/reviewsmodels", getreviewsmodels);
routers.get("/reviewsmodels/:id", getreviewbyid);
routers.post("/reviewsmodels", createreviewsmodels);
routers.put("/reviewsmodels/:id", updatereviewsmodels);
routers.delete("/reviewsmodels/:id", deletereviewsmodels);

module.exports = routers