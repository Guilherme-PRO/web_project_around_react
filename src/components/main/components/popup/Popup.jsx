import closeIcon from "../../../../image/CloseIconclosde.png"

export default function Popup({onClose, title, children}) {
  return(
    <>
      <div className="popup" id="popupOne">
        <div className="popup__overlay">
          <img
            type="button"
            src= {closeIcon}
            alt="closeButton"
            id="close-one"
            className="popup__close"
            onClick={onClose}
          />
          <h2 className="popup__title">{title}</h2>
          {children}
        </div>
      </div>
    </>
  );
}