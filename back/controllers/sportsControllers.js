// const pool = require("../database/index");
import { getSportsSQL } from "../database/index.js";

const getSports = async (req, res) => {
  const response = await getSportsSQL();
  res.json(response);
};

module.exports = {
  getSports,
};
