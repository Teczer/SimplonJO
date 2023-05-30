import express from "express";
const app = express();

import dotenv from "dotenv";
const dot = dotenv.config();
// require("dotenv").config();

// const sportsRouter = require("./routes/sport");
import sportsRourter from "./routes/sport.js";

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/sport", sportsRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
