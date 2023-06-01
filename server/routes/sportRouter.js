import express from "express";
import { createSport, deleteSport, getSport, getSports, modifySport } from "../controller/sportController.js";

const router = express.Router();

router.get("/", getSports);
router.get("/:id", getSport)
router.post("/", createSport)
router.delete("/:id", deleteSport)
router.patch("/:id", modifySport)

export default router;
