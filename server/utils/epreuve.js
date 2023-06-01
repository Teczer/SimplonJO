import { pool } from "./sport.js"

//GET

export const getEpreuvesSQL = async () => {
    const [rows] = await pool.query("SELECT * FROM epreuve");
    return rows;
};

export const getEpreuveSQL = async (id) => {
    const [rows] = await pool.query(`SELECT * FROM epreuve WHERE id = ?`, [id]);
    return rows[0];
};

//create
export const createEpreuveSQL = async (nom, sportId) => {
    await pool.query(`INSERT INTO epreuve (nom, Sport_Id) VALUES (?,?)`, [nom, sportId,]);
};

//update
export const updateEpreuveSQLById = async (nom, sportId, id) => {
    await pool.query(`UPDATE epreuve SET nom = ?, Sport_Id = ? WHERE id= ?`, [
        nom,
        sportId,
        id,
    ]);
};

//delete 
export const deleteEpreuveSQLById = async (id) => {
    await pool.query(`DELETE FROM epreuve WHERE id = ?`, [id]);
}