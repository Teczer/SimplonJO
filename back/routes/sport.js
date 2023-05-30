const express = require("express");
const router = express.Router();

const sportsController = require("../controllers/sportsControllers");

router.get("/", sportsController.getAll);

module.exports = router;
