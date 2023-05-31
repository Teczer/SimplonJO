import axios from "axios";

function AthleteDeleteButton({ athlete, getAllAthletes }) {
  // DELETE
  async function deleteAthlete() {
    await axios.delete(`http://localhost:3010/api/athletes/${athlete.id}`);
    getAllAthletes();
  }
  return (
    <i
      className="fa-solid fa-trash"
      onClick={() => {
        deleteAthlete();
      }}
    />
  );
}

export default AthleteDeleteButton;
