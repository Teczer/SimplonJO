import {
  getAthletesSQL,
  getAthleteSQLById,
  deleteAthleteSQLById,
  createAthleteSQL,
  updateAthleteSQLById,
  deletTitreyAthelete
} from "../utils/athlete.js";

// GET ALL ATHLETES

export const getAthletes = async (req, res) => {
  const athletes = await getAthletesSQL();
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
  await deletTitreyAthelete(id)
  await deleteAthleteSQLById(Number(id));
  res.json({ message: `Athlete Deleted ${id}` });
};

// CREATE ATHLETE

export const createAthlete = async (req, res) => {
  const { nom, prenom } = req.body;
  console.log("nom", nom.length);
  console.log("prenom", prenom.length);
  if (prenom.length < 3 || nom.length < 3) {
    return res.status(400).json({
      message: "Il n'y a pas assez de caractères",
      status: false,
    });
  }
  try {
    await createAthleteSQL(nom, prenom);
    res.json({ message: `Athlete ${nom} ${prenom} created !`, status: true });
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
