import { useState } from "react";

function FormAthlete({ getAllAthletes }) {
  // create

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [formErrorMsg, setFormErrorMsg] = useState();
  const [formSucessMsg, setFormSucessMsg] = useState();

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
        if (responseData.status === false) {
          setFormErrorMsg(responseData.message);
          setFormSucessMsg(null);
        }
        if (responseData.status === true) {
          setFormSucessMsg(responseData.message);
          setFormErrorMsg(null);
          getAllAthletes();
        }
        // Réinitialiser les champs du formulaire
        setNom("");
        setPrenom("");
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  };
  return (
    <div className="form-container">
      <form className="form-athlete" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom :</label>
          <input
            className="input-athelte-form"
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom :</label>
          <input
            className="input-athelte-form"
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <p style={{ color: "red" }}>{formErrorMsg}</p>
        <p style={{ color: "green" }}>{formSucessMsg}</p>
        <button className="sumbit-button-form" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default FormAthlete;
