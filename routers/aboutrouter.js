const express = require("express");
const { getaboutmodels, createaboutmodels, updateaboutmodels, deleteaboutmodels } = require("../controllers/aboutcontroller");


const router = express.Router();


router.get("/aboutmodels", getaboutmodels);
router.post("/aboutmodels", createaboutmodels);
router.put("/aboutmodels/:id", updateaboutmodels);
router.delete("/aboutmodels/:id", deleteaboutmodels);


module .exports = router