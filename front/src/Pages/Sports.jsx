import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/sports/card";

export default function Sports() {
  const [sports, setSports] = useState();
  const [nom, setNom] = useState()
  const [image, setImage] = useState()

  const getSports = async () => {
    const response = await axios.get("http://localhost:3010/api/sports");
    setSports(response.data);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3010/api/sports", {nom, image})
  }

  const handleChange = (event) => {
    setNom(event.target.value)
  }

  useEffect(() => {
    getSports();
  }, []);

  return (
    <>
      <h1>Sports</h1>
      <ul>
        {sports && sports.map((sport) => <Card key={sport.id} item={sport}/>)}
      </ul>

      <form className="btn-sub" onSubmit={handleSubmit}>
        <label className="box" htmlFor="sport">
          Name:
        </label>
          <input type="text" name="sport" onChange={handleChange} />
          <label className="box" htmlFor="image">
          Image:
        </label>
          <input type="text" name="image" onChange={(e) => {
            setImage(e.target.value)
          }} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
