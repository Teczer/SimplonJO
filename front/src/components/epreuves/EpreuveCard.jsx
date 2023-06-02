import axios from "axios";
import { useEffect, useState } from "react";

export function EpreuveCard({ epreuve }) {
  const medailles = ["🥇", "🥈", "🥉"];
  const [athletes, setAthletes] = useState();
  const getAthletes = async () => {
    const response = await axios.get("http://localhost:3010/api/athletes");

    setAthletes(response.data);
  };

  useEffect(() => {
    getAthletes();
  });
  return (
    <article className="epreuve_card">
      <p className="epreuve-name">{epreuve.nom}</p>
      <ul className="medaille-controller">
        {medailles.map((medaille) => (
          <li className="epreuve_li">
            <div className="medaille-selector-wrapper">
              <p className="epreuve_title">{medaille}</p>
              <select className="select-medaille-controller" type="text">
                <option value="Default">Unsigned</option>
                {athletes &&
                  athletes.map((athlete) => (
                    <option value={athlete.id}>
                      {athlete.nom + " " + athlete.prenom}
                    </option>
                  ))}
              </select>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
