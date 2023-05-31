import mysql from "mysql2";

export const pool = mysql
  .createPool({
    host: "0.0.0.0",
    user: "root",
    password: "root",
    database: "simplon_jo",
    port: 3306,
  })
  .promise();

export const getSportsSQL = async () => {
  const [rows] = await pool.query("SELECT * FROM sport");

  return rows;
};
