import {
  getTitresSQL,
  getTitreBySearchSQL,
  updateTitreSQLById,
  deleteTitreSQLById,
  createTitreSQL,
  getTitreByEpreuveSQL
} from "../utils/titre.js";

// GET

export const getTitres = async (req, res) => {
  const titres = await getTitresSQL();
  res.json(titres);
};

export const getTitreBySearch = async (req, res) => {
  const { athlete_id, epreuve_id, medaille_id } = req.body;
  try {
    const sport = await getTitreBySearchSQL(
      athlete_id,
      epreuve_id,
      medaille_id
    );
    res.json(sport);
  } catch (error) {
    console.log("error", error);
  }
};

// DELETE

export const deleteTitre = async (req, res) => {
  const { athlete_id, epreuve_id, medaille_id } = req.body;
  await deleteTitreSQLById(athlete_id, epreuve_id, medaille_id);
  res.json({
    message: `Sport Deleted ${athlete_id} and ${epreuve_id} and ${medaille_id} `,
  });
};

// CREATE

export const createTitre = async (req, res) => {
  const { athlete_id, epreuve_id, medaille_id } = req.body;

  try {
    await createTitreSQL(athlete_id, epreuve_id, medaille_id);
    res.json({
      message: `L'athlete ${athlete_id} a remporté l'épreuve ${epreuve_id} et obtient la médaille ${medaille_id}'`,
      status: true,
    });
  } catch (error) {
    console.log("error", error);
  }
};

// PATCH

export const updateTitre = async (req, res) => {
  const {
    newathlete,
    newepreuve,
    newmedaille,
    athlete_id,
    epreuve_id,
    medaille_id,
  } = req.body;
  try {
    await updateTitreSQLById(
      newathlete,
      newepreuve,
      newmedaille,
      athlete_id,
      epreuve_id,
      medaille_id
    );
    res.json({ message: `Le titre a été patché !` });
  } catch (error) {
    console.log("error", error);
  }
};

export const getTitreByEpreuve = async(req, res) => {
  const {id} = req.params

  const titres = await getTitreByEpreuveSQL(id)

  res.json(titres)
}
