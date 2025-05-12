export default function EditProfile() {
  return (
    <form className="popup__form" id="popup__form" name="formName">
      <input
        id="name"
        name="name"
        type="text"
        className="popup__input"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        autoComplete="username"
        required
      />
      <span className="popup__input-error name-error"></span>
      <input
        id="job"
        name="about"
        type="text"
        className="popup__input"
        placeholder="about me"
        minLength="2"
        maxLength="200"
        autoComplete="username"
        required
      />
      <span className="popup__input-error job-error"></span>
      <button disabled type="submit" className="popup__submit" id="savebutton">
        Salvar
      </button>
    </form>
  );
}
