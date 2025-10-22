const express = require("express");
const { getcompeniesmodels, createcompeniesmodels,  deletecompeniesmodels, updatecompeniesmodels } = require("../controllers/compeniescontroller");

const router = express.Router();


router.get("/componeiesmodels", getcompeniesmodels);
router.post("/componeiesmodels", createcompeniesmodels);
router.put("/componeiesmodels/:id", updatecompeniesmodels)
router.delete("/componeiesmodels/:id", deletecompeniesmodels)


module.exports = router