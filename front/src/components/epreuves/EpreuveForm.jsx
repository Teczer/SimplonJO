export default function EpreuveForm({ handleEpreuveSubmit, setEpreuveName }) {
  return (
    <form className="epreuve-form-container" onSubmit={handleEpreuveSubmit}>
      <input
        placeholder="Nom de l'épreuve"
        className="input-epreuve-form"
        type="text"
        onChange={(e) => {
          setEpreuveName(e.target.value);
        }}
      />
      <button className="add-button-epreuve">
        <i class="fa-solid fa-plus" />
      </button>
    </form>
  );
}
