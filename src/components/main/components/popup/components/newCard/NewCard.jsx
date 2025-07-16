import React, { useContext, useState } from 'react';
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext.js";
export default function NewCard() {
  const [title, setTitle] = useState('');
  const [link, setLink]  = useState('');
  const { handleAddPlaceSubmit} = useContext(CurrentUserContext)
  
  function handleSubmit(event) {
    event.preventDefault();
    handleAddPlaceSubmit({title, link})
  }

  return (
    <form className="popup__form" id="form-addCard" name="formAdd" onSubmit={handleSubmit}>
      <input
       value={title}
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

