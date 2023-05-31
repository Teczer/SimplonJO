import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export default function Athletes() {
  // get
  async function getAllAthletes() {
    const response = await axios.get("http://localhost:3010/api/athletes");
    setAthletes(response.data);
  }
  // delete
  async function deleteAthlete(id) {
    await axios.delete(`http://localhost:3010/api/athletes/${id}`);
    getAllAthletes();
  }

  // create

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer la requête POST avec les données nom et prénom
    const data = { nom, prenom };

    fetch("http://localhost:3010/api/athletes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Réponse du serveur :", responseData);
        // Réinitialiser les champs du formulaire
        setNom("");
        setPrenom("");
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
    getAllAthletes();
  };

  const [athletes, setAthletes] = useState([]);
  console.log("athletes", athletes);

  useEffect(() => {
    getAllAthletes();
  }, []);
  return (
    <div className="athlete-container">
      {athletes.length > 0 &&
        athletes.map((value, index) => (
          <>
            <div className="athlete-card" id={value.id}>
              <div className="athlete-informations">
                <p>{value.prenom}</p>
                <p>{value.nom}</p>
              </div>
              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  deleteAthlete(value.id);
                }}
              />
            </div>
          </>
        ))}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
