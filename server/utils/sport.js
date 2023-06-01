import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config()

export const pool = mysql
  .createPool({
    host: "0.0.0.0",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: "simplon_jo",
    port: 3306,
  })
  .promise();

export const getSportsSQL = async () => {
  const [rows] = await pool.query("SELECT * FROM Sport");
  return rows;
};

///
export const deleteSportSQL = async (id) =>
{
  await pool.query("DELETE FROM Sport WHERE id = ? ", [id]);
};


export const createSportSQL = async (nom, image) => {
  await pool.query("INSERT INTO Sport (nom, image) VALUES (?, ?)", [nom, image]);
};


export const modifySportSQL = async (nom,id) =>
{
    await pool.query("UPDATE Sport SET nom = ? WHERE id = ?",[nom,id])
}

export const getSportSQL = async (id) => {
  const [rows] = await pool.query("SELECT * FROM Sport where id = ?", [id]);
  return rows[0];
};
