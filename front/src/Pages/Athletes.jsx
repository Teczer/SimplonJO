import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import FormAthlete from "../components/athletes/FormAthlete";
import AthleteCard from "../components/athletes/AthleteCard";

export default function Athletes() {
  // GET

  const [athletes, setAthletes] = useState([]);
  console.log("athletes", athletes);

  async function getAllAthletes() {
    const response = await axios.get("http://localhost:3010/api/athletes");
    setAthletes(response.data);
  }

  useEffect(() => {
    getAllAthletes();
  }, []);
  return (
    <div className="athlete-container">
      {athletes.length > 0 &&
        athletes.map((value) => (
          <>
            <AthleteCard
              athlete={value}
              key={value.id}
              getAllAthletes={getAllAthletes}
            />
          </>
        ))}
      <FormAthlete getAllAthletes={getAllAthletes} />
    </div>
  );
}
