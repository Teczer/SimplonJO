const pool = require("../database/index");
const sportsController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from sport");
      res.json({
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = sportsController;
