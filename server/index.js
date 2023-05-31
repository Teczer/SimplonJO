import express from "express";
import sportsRouter from "./routes/sportRouter.js";
import athleteRouter from "./routes/athleteRouter.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sports", sportsRouter);
app.use("/api/athletes", athleteRouter);

app.listen(3010);
