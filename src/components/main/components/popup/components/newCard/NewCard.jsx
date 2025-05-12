
export default function NewCard() {
  
  return (
    <form className="popup__form" id="form-addCard" name="formAdd">
      <input
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
        type="url"
        className="popup__input"
        placeholder="Link the imagen"
        minLength ={2}
        maxLength= {200}
        autoComplete="url"
        required
      />
      <span className="popup__input-error link-error"></span>
      <button disabled type="submit" className="popup__submit" id="create">
        Criar
      </button>
    </form>
  );
}

