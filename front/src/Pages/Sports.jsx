import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/sports/card";

export default function Sports() {
  const [sports, setSports] = useState();
  const [nom, setNom] = useState();
  const [image, setImage] = useState();

  const getSports = async () => {
    const response = await axios.get("http://localhost:3010/api/sports");
    setSports(response.data);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3010/api/sports", {
      nom,
      image,
    });
  };

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  useEffect(() => {
    getSports();
  }, []);

  return (
    <div className="sports-container">
      <div className="form-container">
        <form class="form-athlete" onSubmit={handleSubmit}>
          <h2 className="form-athlete-title">Ajouter un sport</h2>
          <label htmlFor="sport">Nom:</label>
          <input
            className="input-athelte-form"
            type="text"
            name="sport"
            onChange={handleChange}
          />
          <label htmlFor="image">Image:</label>
          <input
            className="input-athelte-form"
            type="text"
            name="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <input className="sumbit-button-form" type="submit" value="Submit" />
        </form>
      </div>
      <ul className="sports-cards-controller">
        {sports && sports.map((sport) => <Card key={sport.id} item={sport} />)}
      </ul>

    </div>
    </>

  );
}
