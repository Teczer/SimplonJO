import { pool } from "./sport.js";

// GET

export const getAthletesSQL = async () => {
  const [rows] = await pool.query("SELECT * FROM Athlete");

  return rows;
};

export const getAthleteSQLById = async (id) => {
  const [rows] = await pool.query(`SELECT * FROM Athlete WHERE id=?`, [id]);

  return rows[0];
};

// POST

export const createAthleteSQL = async (nom, prenom) => {
  await pool.query(`INSERT INTO Athlete (nom, prenom) VALUES (?,?)`, [
    nom,
    prenom,
  ]);
};

// PATCH

export const updateAthleteSQLById = async (nom, prenom, id) => {
  await pool.query(`UPDATE Athlete SET nom = ? , prenom = ? WHERE id= ?`, [
    nom,
    prenom,
    id,
  ]);
};

// DELETE

export const deleteAthleteSQLById = async (id) => {
  await pool.query(`DELETE FROM Athlete WHERE id = ?`, [id]);
};


export const deletTitreyAthelete = async (athlete_id) => {
  await pool.query("DELETE FROM titres WHERE athlete_id = ?", [athlete_id])
}