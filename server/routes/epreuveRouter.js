import express from "express";
import {
  getEpreuves,
  getEpreuveById,
  deleteEpreuveById,
  createEpreuve,
  updateEpreuveById,
} from "../controller/epreuveController.js";

const router = express.Router();

// GET

router.get("/", getEpreuves);

router.get("/:id", getEpreuveById);

// POST

router.post("/", createEpreuve);

// DELETE

router.delete("/:id", deleteEpreuveById);

// PATCH

router.patch("/:id", updateEpreuveById);

export default router;
