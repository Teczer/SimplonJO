import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src="/img/logojo.png" alt="logo jo" className="logo"/>
      </Link>
      <label htmlFor="toggle" className="menu">☰</label>
      <input type="checkbox" id="toggle"></input>
      <div className="links-elements">
        <Link to={"/sports"}>
          <p>Sports</p>
        </Link>     
        <Link to={"/athletes"}>
          <p>Athletes</p>
        </Link>
      </div>
    </nav>
  );
}
