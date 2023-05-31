export default function Epreuves() {
  return (
    <div className="epreuve">
      <h1>Epreuves</h1>
        <form className="formulaire">
          <div>
            <input type="text" name="name" id="name" className="formstyle" />
          </div>
          <div>
            <input type="submit" value="envoyer" className="submitstyle"/>
          </div>
        </form>
      <article className="athle">
        <h2>athlestisme</h2>
        <ul>
          <li className="athleli">
            <p>100m</p>
            <img src=" " alt="100m" />
          </li>
          <li className="athleli">
            <p>1000m</p>
            <img src=" " alt="1000m" />
          </li>
          <li className="athleli">
            <p>marathon</p>
            <img src=" " alt="marathon" />
          </li>
        </ul>
      </article>
      <article className="athle">
        <h2>natation</h2>
        <ul>
          <li className="athleli">
            <p>400m nage libre</p>
            <img src=" " alt="natation 400m" />
          </li>
          <li className="athleli">
            <p>200m dos</p>
            <img src=" " alt="natation 200m" />
          </li>
        </ul>
      </article>
      <article className="athle">
        <h2>cyclisme</h2>
        <ul>
          <li className="athleli">
            <p>Cyclisme BMX Freestyle</p>
            <img src=" " alt="cyclisme BMX" />
          </li>
          <li className="athleli">
            <p>Cyclisme sur route</p>
            <img src=" " alt="cyclisme sur route" />
          </li>
          <li className="athleli">
            <p>Cyclisme VTT</p>
            <img src=" " alt="cyclisme vtt" />
          </li>
        </ul>
      </article>
    </div>
  );
}
