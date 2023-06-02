import { pool } from "./sport.js";

// GET

export const getTitresSQL = async () => {
  const [rows] = await pool.query(`
SELECT A.nom AS nom_athlete, A.prenom AS prenom_athlete, E.nom AS nom_epreuve, M.type AS type_medaille
FROM Titres T
JOIN Athlete A ON T.athlete_id = A.id
JOIN Epreuve E ON T.epreuve_id = E.id
JOIN Medaille M ON T.medaille_id = M.id;
  `);
  return rows;
};

export const getTitreBySearchSQL = async (
  athlete_id,
  epreuve_id,
  medaille_id
) => {
  const [rows] = await pool.query(
    `select * from titres where epreuve_id = ? and athlete_id = ? and medaille_id = ?;`,
    [athlete_id, epreuve_id, medaille_id]
  );
  return rows[0];
};

// CREATE

export const createTitreSQL = async (athlete_id, epreuve_id, medaille_id) => {
  await pool.query(
    `INSERT INTO titres (athlete_id, epreuve_id, medaille_id) VALUES (?, ?, ?)
  `,
    [athlete_id, epreuve_id, medaille_id]
  );
};

// UPDATE
export const updateTitreSQLById = async (
  newathlete,
  newepreuve,
  newmedaille,
  athlete_id,
  epreuve_id,
  medaille_id
) => {
  await pool.query(
    `
    UPDATE Titres
    SET
      athlete_id = ?,
      epreuve_id = ?,
      medaille_id = ?
    WHERE
      athlete_id = ?
      AND epreuve_id = ? 
      AND medaille_id = ?
  `,
    [newathlete, newepreuve, newmedaille, athlete_id, epreuve_id, medaille_id]
  );
};

// DELETE

export const deleteTitreSQLById = async (
  athlete_id,
  epreuve_id,
  medaille_id
) => {
  await pool.query(
    `DELETE FROM WHERE epreuve_id = ? AND athlete_id = ? AND medaille_id = ?;`,
    [athlete_id, epreuve_id, medaille_id]
  );
};

export const getTitreByEpreuveSQL = async (epreuve_id) => {
  const [rows] = await pool.query(`SELECT Athlete.id, Athlete.nom, Athlete.prenom, Medaille.id AS medaille_id, Medaille.type
  FROM Titres
  JOIN Athlete ON Titres.athlete_id = Athlete.id
  JOIN Medaille ON Titres.medaille_id = Medaille.id
  WHERE Titres.epreuve_id = ?`, [epreuve_id])

  return rows;
}