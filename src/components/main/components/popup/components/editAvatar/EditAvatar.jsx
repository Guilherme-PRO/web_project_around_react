import { useEffect, useRef, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const avatarRef = useRef(null);
  const {handleUpdateAvatar} = useContext(CurrentUserContext);
  
  function handleSubmit(event) {
    event.preventDefault();
    
    if (avatarRef.current && avatarRef.current.value) {
      handleUpdateAvatar(avatarRef.current.value); 
      avatarRef.current.value = ""; 
    }
  }

  return (
    <form className="popup__form" id="form-photoPerfil" name="formphotoPerfil" onSubmit={handleSubmit}>
      <input
        ref={avatarRef} 
        id="links"
        name="link"
        type="url"
        className="popup__input"
        placeholder="Link the imagen"
        minLength={2}
        maxLength={200}
        autoComplete="url"
        required
      />
      <span className="popup__input-error links-error"></span>
      <button type="submit" className="popup__submit" id="submit-pefil">
        Sim
      </button>
    </form>
  );
}
