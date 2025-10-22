const express = require("express");
const { getnavbarmodels, createnavbarmodels, updatenavbarmodels, deletenavbarmodels } = require("../controllers/navbarcontroller");

const router = express.Router();

router.get("/navbarmodels", getnavbarmodels);
router.post("/navbarmodels", createnavbarmodels);
router.put("/navbarmodels/:id", updatenavbarmodels);
router.delete("/navbarmodels/:id", deletenavbarmodels);


module.exports = router