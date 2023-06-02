import axios from "axios";
import { useEffect, useState } from "react";
import MedailleItem from "./MedailleItem";

export function EpreuveCard({epreuve}) {

    const medailles = ["🥇", "🥈", "🥉"]
    const [athletes, setAthletes] = useState()
    const [isMedailles, setIsMedailles] = useState({})

    const getAthletes = async () => {
        const response = await axios.get("http://localhost:3010/api/athletes")

        setAthletes(response.data)
    }   

    const getTitreByEpreuve = async () => {
        const response = await axios.get("http://localhost:3010/api/titre/epreuve/" + epreuve.id)
    
        const or = response.data.filter(item => item.medaille_id === 1);
        const silver = response.data.filter(item => item.medaille_id === 2);
        const bronze = response.data.filter(item => item.medaille_id === 3);
        setIsMedailles({or, silver, bronze})
    }
    
    useEffect(() => {
        getAthletes()
        getTitreByEpreuve()
    }, [])


    console.log(isMedailles)

  return <article className="epreuve_card">
    <p>{epreuve.nom}</p>
    <ul>
        {medailles.map((medaille, index) => (
           <MedailleItem medaille={medaille} id={index + 1} isMedailles={isMedailles} epreuve_id={epreuve.id} athletes={athletes}/>
        ))}
    </ul>
  </article>;
}
