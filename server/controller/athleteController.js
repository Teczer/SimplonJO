import {
  getAthletesSQL,
  getAthleteSQLById,
  deleteAthleteSQLById,
  createAthleteSQL,
  updateAthleteSQLById,
} from "../utils/athlete.js";

// GET ALL ATHLETES

export const getAthletes = async (req, res) => {
  const athletes = await getAthletesSQL();
  console.log(athletes);
  res.json(athletes);
};

// GET SINGLE ATHLETE BY ID

export const getAthleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const athlete = await getAthleteSQLById(id);
    res.json(athlete);
  } catch (error) {
    console.log("error", error);
  }
};

//  DELETE SINGLE ATHLETE BY ID

export const deleteAthleteById = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  await deleteAthleteSQLById(id);
  res.json({ message: `Athlete Deleted ${id}` });
};

// CREATE ATHLETE

export const createAthlete = async (req, res) => {
  const { nom, prenom } = req.body;
  try {
    await createAthleteSQL(nom, prenom);
    res.json({ message: `Athlete ${nom} ${prenom} created !` });
  } catch (error) {
    console.log("error", error);
  }
};

// UPDATE ATHLETE BY ID

export const updateAthleteById = async (req, res) => {
  const { nom, prenom } = req.body;
  const { id } = req.params;
  try {
    await updateAthleteSQLById(nom, prenom, id);
    res.json({ message: `Athlete ${nom} ${prenom} patchted !` });
  } catch (error) {
    console.log("error", error);
  }
};
