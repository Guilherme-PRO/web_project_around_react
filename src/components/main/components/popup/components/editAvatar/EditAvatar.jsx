export default function EditAvatar() {
  return (
    <form className="popup__form" id="form-photoPerfil" name="formphotoPerfil">
      <input
        id="links"
        name="link"
        type="url"
        className="popup__input"
        placeholder="Link the imagen"
        minlength="2"
        maxlength="200"
        autocomplete="url"
        required
      />
      <span className="popup__input-error links-error">Link</span>
      <button type="submit" className="popup__submit" id="submit-pefil">
        Sim
      </button>
    </form>
  );
}
