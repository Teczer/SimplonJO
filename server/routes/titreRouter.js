import express from "express";
import {
  createTitre,
  deleteTitre,
  getTitres,
  getTitreBySearch,
  updateTitre,
} from "../controller/titreController.js";

const router = express.Router();

router.get("/", getTitres);
router.get("/", getTitreBySearch);
router.post("/", createTitre);
router.delete("/", deleteTitre);
router.patch("/", updateTitre);

export default router;
