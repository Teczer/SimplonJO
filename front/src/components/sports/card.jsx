import axios from "axios"

export default function Card({ item }) {

    const handleClick = async () => {
        const response = await axios.delete(`http://localhost:3010/api/sports/${item.id}`)
        window.location.reload()
    }

  return (
    <li>
        <img src={item.image} alt=""/>
      {item.nom}
      <i className="fa-solid fa-trash" onClick={handleClick}/>
    </li>
  );
}
