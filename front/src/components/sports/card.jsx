import axios from "axios";
import { useEffect, useState } from "react";
import EpreuveForm from "../epreuves/EpreuveForm";
import { EpreuveCard } from "../epreuves/EpreuveCard";

export default function Card({ item }) {
  const [epreuveName, setEpreuveName] = useState();
  const [epreuves, setEpreuves] = useState();

  const handleClick = async () => {
    const response = await axios.delete(
      `http://localhost:3010/api/sports/${item.id}`
    );
    window.location.reload();
  };

  const handleEpreuveSubmit = async () => {
    const sportId = item.id;

    const response = await axios.post("http://localhost:3010/api/epreuves", {
      sportId,
      epreuveName,
    });
  };

  const getEpreuves = async () => {
    const response = await axios.get(
      `http://localhost:3010/api/epreuves/sport/` + item.id
    );

    setEpreuves(response.data);
  };

  useEffect(() => {
    getEpreuves();
  }, []);

  return (
    <li className="sport_card">
      <div>
        <h3 className="sport_title">{item.nom}</h3>
        <img className="img_card" src={item.image} alt="" />
        <i className="fa-solid fa-trash" onClick={handleClick} />
      </div>
      <div>
        <h3 className="sport_title">Epreuves</h3>
        <EpreuveForm
          handleEpreuveSubmit={handleEpreuveSubmit}
          setEpreuveName={setEpreuveName}
        />
        {epreuves && epreuves.map((epreuve) => <EpreuveCard key={epreuve.id} epreuve={epreuve}/>)}
      </div>
    </li>
  );
}
