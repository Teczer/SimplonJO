import express from "express";
import { getSports } from "../controller/sportController.js";

const router = express.Router();

router.get("/", getSports);

export default router;
