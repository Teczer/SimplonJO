import { getSportsSQL } from "../utils/database.js";

export const getSports = async (req, res) => {
  const sports = await getSportsSQL();
  console.log(sports);
  res.json(sports);
};
