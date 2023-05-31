import express from "express";
import sportsRouter from "./routes/sportRouter.js";
import athleteRouter from "./routes/athleteRouter.js";

const app = express();
app.use(express.json());

app.use("/api/sports", sportsRouter);
app.use("/api/athletes", athleteRouter);

app.listen(3010);
