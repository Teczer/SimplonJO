import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function MedailleItem({ medaille, athletes, id, epreuve_id, isMedailles }) {
  const [isEditable, setIsEditable] = useState();
  const select = useRef()
  const [athlete, setAthlete] = useState()
  const [value, setValue] = useState()

  const handleSubmit = async () => {
    const medaille_id = id
    const athlete_id = Number(athlete)
    const response = await axios.post("http://localhost:3010/api/titre", {athlete_id, epreuve_id, medaille_id})
  }

  const handleSelect = (event) => {setAthlete(event.target.value)}

 useEffect(() => {
    if(isMedailles && select){
        if(id === 1){
            const ath = isMedailles?.silver?.prenom 
        }else if(id === 2){
            const ath = isMedailles?.silver?.prenom 
        }else if(id === 3){
            const ath = isMedailles?.silver
        }
    }
 })

  return (
    <li className="epreuve_li">
        <div className="medaille-selector-wrapper">

      <p className="epreuve_title">{medaille}</p>
      <form onSubmit={handleSubmit}>
        <select
        className="select-medaille-controller"
          type="text"
          onChange={() => {
              setIsEditable(true);
              handleSelect(event)
            }}
            >
          <option ref={select}
 value="Default">default</option>

          {athletes &&
            athletes.map((athlete, index) => (
                <option value={athlete.id} key={index}>
                {athlete.nom + " " + athlete.prenom}
              </option>
            ))}
        </select>
        {isEditable && (
            <button className="check-button" type="submit">
            <i class="fa-solid fa-check" />
          </button>
        )}
      </form>
        </div>
    </li>
  );
}
