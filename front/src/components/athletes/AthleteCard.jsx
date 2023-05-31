import { useState, useRef } from "react";
import AthleteDeleteButton from "./AthleteDeleteButton";
import AthleteUpdateButton from "./AthleteUpdateButton";

function AthleteCard({ athlete, getAllAthletes }) {
  const [prenom, setPrenom] = useState(athlete.prenom);
  const [nom, setNom] = useState(athlete.nom);

  const [isEditable, setIsEditable] = useState(false);

  function editName() {
    setIsEditable(!isEditable);
  }

  const handleSubmit = () => {
    // Effectuer la requête POST avec les données nom et prénom
    const data = { nom, prenom };

    fetch(`http://localhost:3010/api/athletes/${athlete.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Réponse du serveur :", responseData);

        getAllAthletes();
        // Réinitialiser les champs du formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };

  return (
    <form className="athlete-card" id={athlete.id} onSubmit={handleSubmit}>
      <div className="athlete-informations">
        <input
          className={
            isEditable ? `input-athlete-card-editable` : `input-athlete-card`
          }
          type="text"
          value={prenom}
          onClick={() => setIsEditable(true)}
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
        />
        <input
          className={
            isEditable ? `input-athlete-card-editable` : `input-athlete-card`
          }
          type="text"
          value={nom}
          onClick={() => setIsEditable(true)}
          onChange={(e) => {
            setNom(e.target.value);
          }}
        />
      </div>
      <div className="athlete-buttons">
        <AthleteUpdateButton
          getAllAthletes={getAllAthletes}
          handleSubmit={handleSubmit}
          editName={editName}
        />
        <AthleteDeleteButton
          athlete={athlete}
          getAllAthletes={getAllAthletes}
        />
      </div>
      {isEditable && (
        <button className="check-button" type="submit">
          <i class="fa-solid fa-check" />
        </button>
      )}
    </form>
  );
}

export default AthleteCard;
