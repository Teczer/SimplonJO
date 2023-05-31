import express from "express";
import {
  getAthletes,
  getAthleteById,
  deleteAthleteById,
  createAthlete,
  updateAthleteById,
} from "../controller/athleteController.js";

const router = express.Router();

// GET

router.get("/", getAthletes);

router.get("/:id", getAthleteById);

// POST

router.post("/", createAthlete);

// DELETE

router.delete("/:id", deleteAthleteById);

// PATCH

router.patch("/:id", updateAthleteById);

export default router;
