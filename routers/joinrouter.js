const express = require("express");

const { getjoinusmodels, createjoinusmodels, updatejoinusmodels, deletejoinusmodels } = require("../controllers/joincontroller");

const router = express.Router();

router.get("/joinusmodels", getjoinusmodels);
router.post("/joinusmodels", createjoinusmodels);
router.put("/joinusmodels/:id", updatejoinusmodels);
router.delete("/joinusmodels/:id", deletejoinusmodels);


module.exports = router