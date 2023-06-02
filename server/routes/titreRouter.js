import express from "express";
import {
  createTitre,
  deleteTitre,
  getTitres,
  getTitreBySearch,
  updateTitre,
  getTitreByEpreuve
} from "../controller/titreController.js";

const router = express.Router();

router.get("/", getTitres);
router.get("/epreuve/:id", getTitreByEpreuve)
router.get("/:id", getTitreBySearch);
router.post("/", createTitre);
router.delete("/:id", deleteTitre);
router.patch("/:id", updateTitre);

export default router;
