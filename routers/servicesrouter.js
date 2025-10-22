const express = require ("express");
const { getservicesmodels, createserviesmodels, updateserviesmodels, deleteserviesmodels } = require("../controllers/servicescontroller.js");


const router = express.Router();


router.get("/servicemodels", getservicesmodels)
router.post("/servicemodels", createserviesmodels)
router.put("/servicemodels/:id", updateserviesmodels)
router.delete("/servicemodels/:id", deleteserviesmodels)


module.exports = router