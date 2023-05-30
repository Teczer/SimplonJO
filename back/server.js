const express = require("express");
const app = express();

require("dotenv").config();

const sportsRouter = require("./routes/sport");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/sport", sportsRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
