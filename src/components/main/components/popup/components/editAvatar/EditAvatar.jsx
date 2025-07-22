import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";
import closeIcon from "../../../../../../image/CloseIconclosde.png";
export default function EditAvatar({title, onClosePopup}) {
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
    <form className="popup__overlay" id="form-photoPerfil" name="formphotoPerfil" onSubmit={handleSubmit}>
      <img
            type="button"
            src= {closeIcon}
            alt="closeButton"
            id="close-one"
            className="popup__close"
            onClick={onClosePopup} 
          />
      <h2 className="popup__title">{title}</h2>
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
