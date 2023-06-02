import { pool } from "./sport.js"

//GET

export const getEpreuvesSQL = async () => {
    const [rows] = await pool.query("SELECT * FROM Epreuve");
    return rows;
};

export const getEpreuveSQL = async (id) => {
    const [rows] = await pool.query(`SELECT * FROM Epreuve WHERE id = ?`, [id]);
    return rows[0];
};

//create
export const createEpreuveSQL = async (epreuveName, sportId) => {
    await pool.query(`INSERT INTO Epreuve (nom, Sport_Id) VALUES (?,?)`, [epreuveName, sportId,]);
};

//update
export const updateEpreuveSQLById = async (nom, sportId, id) => {
    await pool.query(`UPDATE Epreuve SET nom = ?, Sport_Id = ? WHERE id= ?`, [
        nom,
        sportId,
        id,
    ]);
};

//delete 
export const deleteEpreuveSQLById = async (id) => {
    await pool.query(`DELETE FROM Epreuve WHERE id = ?`, [id]);
}

export const getEpreuveBySportSQL = async (id) => {
    const [rows] = await pool.query("SELECT * FROM Epreuve WHERE Sport_Id = ?", [id])

    return rows
}