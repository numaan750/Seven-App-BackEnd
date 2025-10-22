const express = require("express");
const { getservicesmodels, createserviesmodels, updateserviesmodels, deleteserviesmodels } = require("../controllers/Servicescontroller.js");


const router = express.Router();

router.get("/servicesmodels", getservicesmodels);
router.post("/servicesmodels", createserviesmodels);
router.put("/servicesmodels/:id", updateserviesmodels);
router.delete("/servicesmodels/:id", deleteserviesmodels);

module.exports = router;
