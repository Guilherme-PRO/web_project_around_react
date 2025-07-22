import React, { useContext, useState } from 'react';
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";
import closeIcon from "../../../../../../image/CloseIconclosde.png";
export default function NewCard({title, onClosePopup}) {
  const [name, setTitle] = useState('');
  const [link, setLink]  = useState('');
  const { handleAddPlaceSubmit} = useContext(CurrentUserContext)
  
  function handleSubmit(event) {
    event.preventDefault();
    handleAddPlaceSubmit({name, link})
  }

  return (
    <form className="popup__form popup__overlay" id="form-addCard" name="formAdd" onSubmit={handleSubmit}>
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
       value={name}
       onChange={(e) => setTitle(e.target.value)}
        id="title"
        name="name"
        type="text"
        className="popup__input"
        placeholder="Title"
        minLength= {2}
        maxLength= {40}
        autoComplete="text"
        required
      />
      <span className="popup__input-error title-error"></span>
      <input
        id="link"
        name="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="url"
        className="popup__input"
        placeholder="Link the imagen"
        minLength ={2}
        maxLength= {200}
        autoComplete="url"
        required
      />
      <span className="popup__input-error link-error"></span>
      
      <button type="submit" className="popup__submit" id="create">
        Criar
      </button>
    </form>
  );
}

