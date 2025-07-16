import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  
  const {currentUser, handleUpdateUser} = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!currentUser) {
      setName(currentUser?.name || "");
      setDescription(currentUser?.about || "");
    }
  },[currentUser]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAboutChange(event) {
    setDescription(event.target.value);
  }

  function handleSumit(event) {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
  }

  return (
    <form className="popup__form" id="popup__form" name="formName" onSubmit={handleSumit}>
      <input
        id="name"
        name="name"
        type="text"
        className="popup__input"
        placeholder="my Name"
        minLength={2}
        maxLength={40}
        autoComplete="username"
        value={name}
        onChange={handleNameChange}
        required
      />
      <span className="popup__input-error name-error"></span>
      <input
        id="job"
        name="about"
        type="text"
        className="popup__input"
        placeholder="about me"
        minLength={2}
        maxLength={200}
        autoComplete="username"
        value={description}
        onChange={handleAboutChange}
        required
      />
      <span className="popup__input-error job-error"></span>
      <button type="submit" className="popup__submit" id="savebutton">
        Salvar
      </button>
    </form>
  );
}
