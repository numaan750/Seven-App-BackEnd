const express = require ("express");
const { gethomemodels, craetehomemodels, updatehomemodels, deletehomemodels } = require("../controllers/homecontroller");

const router = express.Router();


router.get("/homemodels", gethomemodels);
router.post("/homemodels", craetehomemodels);
router.put("/homemodels/:id", updatehomemodels);
router.delete("/homemodels/:id", deletehomemodels);


module.exports = router