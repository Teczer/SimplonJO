import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar">
            <Link to={"/"}>
                <h1>Simplon JO</h1>
            </Link>
            <Link to={"/sports"}>
                <p>Sports</p>
            </Link>
            <Link to={"/epreuves"}>
                <p>Epreuves</p>
            </Link>
            <Link to={"/athletes"}>
                <p>Athletes</p>
            </Link>
        </nav>
        
    )
}