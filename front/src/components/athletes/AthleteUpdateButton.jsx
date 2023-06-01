function AthleteUpdateButton({ editName, handleSubmit, getAllAthletes }) {
  return (
    <i
      className="fa-solid fa-pen"
      onClick={() => {
        editName();
        console.log("updateValues", updateValues);
      }}
    />
  );
}

export default AthleteUpdateButton;
