import axios from "axios";
import { useEffect, useState } from "react";

export function EpreuveCard({epreuve}) {

    const medailles = ["🥇", "🥈", "🥉"]
    const [athletes, setAthletes] = useState()
    const getAthletes = async () => {
        const response = await axios.get("http://localhost:3010/api/athletes")

        setAthletes(response.data)
    }   

    useEffect(() => {
        getAthletes()
    })
  return <article className="epreuve_card">
    <p>{epreuve.nom}</p>
    <ul>
        {medailles.map((medaille) => (
            <li className="epreuve_li">
                <p className="epreuve_title">

            {medaille}
                </p>
            <select type="text" >
                <option value="Default">default</option>
                {athletes && athletes.map((athlete) => (
                    <option value={athlete.id}>{athlete.nom + " " + athlete.prenom}</option>
                ))}
            </select>
        </li>
        ))}
        
    </ul>
  </article>;
}
