// const mysql = require("mysql2");
import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

const getSportsSQL = async () => {
  const [rows] = await pool.query("select * from sport");

  return rows;
};

module.exports = {
  getSportsSQL,
};
