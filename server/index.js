import express from "express"
import sportsRouter from "./routes/sportRouter.js"

const app = express()

app.use("/api/sports", sportsRouter)

app.listen(3010)