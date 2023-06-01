import "../assets/styles/epreuve.css";
export default function Epreuves() {
  return (
    <div className="epreuve">
        <form className="formulaire">
          <div>
            <input type="text" name="name" id="name" className="formstyle" />
          </div>
          <div>
            <input type="submit" value="envoyer" className="submitstyle"/>
          </div>
        </form>
      <article className="card-epreuve">
        <h2>athlestisme</h2>
        <ul>
          <li className="li-epreuve">
            <p>100m</p>
            <img src=" " alt="100m" />
          </li>
          <li className="li-epreuve">
            <p>1000m</p>
            <img src=" " alt="1000m" />
          </li>
          <li className="li-epreuve">
            <p>marathon</p>
            <img src=" " alt="marathon" />
          </li>
        </ul>
      </article>
      <article className="card-epreuve">
        <h2>natation</h2>
        <ul>
          <li className="li-epreuve">
            <p>400m nage libre</p>
            <img src=" " alt="natation 400m" />
          </li>
          <li className="li-epreuve">
            <p>200m dos</p>
            <img src=" " alt="natation 200m" />
          </li>
        </ul>
      </article>
      <article className="card-epreuve">
        <h2>cyclisme</h2>
        <ul>
          <li className="li-epreuve">
            <p>Cyclisme BMX Freestyle</p>
            <img src=" " alt="cyclisme BMX" />
          </li>
          <li className="li-epreuve">
            <p>Cyclisme sur route</p>
            <img src=" " alt="cyclisme sur route" />
          </li>
          <li className="li-epreuve">
            <p>Cyclisme VTT</p>
            <img src=" " alt="cyclisme vtt" />
          </li>
        </ul>
      </article>
    </div>
  );
}