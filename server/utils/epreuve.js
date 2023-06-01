import { pool } from "./sport"

//GET

export const getEpreuvesSQL = async () => {
    const [rows] = await pool.query("SELECT* FROM epreuve");
    return rows;
};

export const getEpreuveSQL = async (id) => {
    const [rows] = await pool.query(`SELECT * FROM epreuve WHERE id=?`, [id]);
    return rows[0];
};

//create
export const createEpreuveSQL = async (nom, prenom) => {
    await pool.query(`INSERT INTO epreuve (nom, prenom) VALUES (?,?)`, [nom, prenom,]);
};

//update
export const updateEpreuveSQLById = async (nom, prenom, id) => {
    await pool.query(`UPDATE epreuve SET nom = ?, prenom = ? WHERE id= ?`, [
        nom,
        prenom,
        id,
    ]);
};

//delete 
export const deleteEpreuveSQLById = async (id) => {
    await pool.query(`DELETE FROM epreuve WHERE id = ?`, [id]);
}