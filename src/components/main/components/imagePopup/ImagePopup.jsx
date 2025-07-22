import closeIcon from "../../../../image/CloseIconclosde.png";

export default function ImagePopup({ card, onClosePopup }) {
  if (!card) return null;
  return (
    <>
      <div className=" popup__form" id="popup__image">
        <img
          onClick={onClosePopup}
          src={closeIcon}
          alt="closeButton"
          id="close-image"
          className="popup__close"
        />
        <img src={card.link} alt={card.name} className="popup__image" />
        <p className="popup__image-title">{card.name} </p>
      </div>
    </>
  );
}
