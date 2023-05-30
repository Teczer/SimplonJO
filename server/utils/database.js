import mysql from "mysql2"

const pool = mysql
  .createPool({
    host: "0.0.0.0",
    user: "root",
    password: "",
    database: "simplon_jo",
    port: 3306,
  })
  .promise();

export const getSportsSQL = async () =>
{
    const [rows] = await pool.query("SELECT * FROM sport")

    return rows;
}

