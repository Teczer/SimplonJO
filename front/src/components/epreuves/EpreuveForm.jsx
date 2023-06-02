export default function EpreuveForm({handleEpreuveSubmit, setEpreuveName}){
    return (
        <form onSubmit={handleEpreuveSubmit}>
        <label htmlFor="epreuve_nom">nom</label>
        <input name="epreuve_nom" type="text" onChange={(e) => {
          setEpreuveName(e.target.value)
        }}/>
        <button>
          <i className="fa-solid fa-plus" style={{border: "1px solid black", borderRadius: "10px"}}/>
        </button>
      </form>
    )
}