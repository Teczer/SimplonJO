import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1>SIMPLON JO</h1>
      </Link>
      <div className="links-elements">
        <Link to={"/sports"}>
          <p>Sports</p>
        </Link>
        <Link to={"/epreuves"}>
          <p>Epreuves</p>
        </Link>
        <Link to={"/athletes"}>
          <p>Athletes</p>
        </Link>
      </div>
    </nav>
  );
}
