import closeIcon from "../../../../image/CloseIconclosde.png"

export default function ImagePopup({ card }) {
    if(!card) return null;
    return (
      <>
        <div className="popup">
          <div className="popup__overlay">
            <img
              src={closeIcon}
              alt="closeButton"
              id="close-image"
              className="popup__close"
            />
            <img src={card.link} alt={card.name} className="popup__image" />
            <p className="popup__image-title">{card.name} </p>
          </div>
        </div>
      </>
    );
}
