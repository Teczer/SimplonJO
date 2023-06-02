import {
  getSportsSQL,
  createSportSQL,
  getSportSQL,
  deleteSportSQL,
  modifySportSQL,
} from "../utils/sport.js";

export const getSports = async (req, res) => {
  const sports = await getSportsSQL();
  res.json(sports);
};
export const deleteSport = async (req, res) => {
  const { id } = req.params;
  await deleteSportSQL(id);
  res.json({ message: `Sport Deleted ${id}` });
};
export const modifySport = async (req, res) => {
  const { nom } = req.body;
  const { id } = req.params;
  try {
    await modifySportSQL(nom, id);
    res.json({ message: `Sport ${nom} patchted !` });
  } catch (error) {
    console.log("error", error);
  }
};

export const createSport = async (req, res) => {
  const { nom, image } = req.body;

  try {
    await createSportSQL(nom, image);
    res.json({ message: `Sport ${nom} created !` });
  } catch (error) {
    console.log("error", error);
  }
};

export const getSport = async (req, res) => {
  const { id } = req.params;
  try {
    const sport = await getSportSQL(id);
    res.json(sport);
  } catch (error) {
    console.log("error", error);
  }
};
