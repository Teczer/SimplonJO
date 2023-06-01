import { pool } from "./sport.js";

// GET

export const getAthletesSQL = async () => {
  const [rows] = await pool.query("SELECT * FROM athlete");

  return rows;
};

export const getAthleteSQLById = async (id) => {
  const [rows] = await pool.query(`SELECT * FROM athlete WHERE id=?`, [id]);

  return rows[0];
};

// POST

export const createAthleteSQL = async (nom, prenom) => {
  await pool.query(`INSERT INTO athlete (nom, prenom) VALUES (?,?)`, [
    nom,
    prenom,
  ]);
};

// PATCH

export const updateAthleteSQLById = async (nom, prenom, id) => {
  await pool.query(`UPDATE athlete SET nom = ? , prenom = ? WHERE id= ?`, [
    nom,
    prenom,
    id,
  ]);
};

// DELETE

export const deleteAthleteSQLById = async (id) => {
  await pool.query(`DELETE FROM athlete WHERE id = ?`, [id]);
};
