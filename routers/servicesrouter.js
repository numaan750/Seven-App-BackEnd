const express = require("express");
const { getservicesmodels, createserviesmodels, updateserviesmodels, deleteserviesmodels } = require("../controllers/servicesontroller");

const router = express.Router();


router.get("/serviesmodels", getservicesmodels);
router.post("/serviesmodels", createserviesmodels);
router.put("/serviesmodels/:id", updateserviesmodels);
router.delete("/serviesmodels/:id", deleteserviesmodels);



module.exports = router