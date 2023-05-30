import express from "express";
import getSports from "../controllers/sportsControllers.js";
const router = express.Router();

router.get("/", getSports);

module.exports = router;
