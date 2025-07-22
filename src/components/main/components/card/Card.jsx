import { useState } from "react";
import trash from "../../../../image/Groupl1xe1ra.png";
import like from "../../../../image/Vector-like.png";
import ImagePopup from "../imagePopup/ImagePopup";

export default function Card({
  name,
  link,
  isLiked,
  cardId,
  toggleLike,
  onCardDelete,
  onOpenPopup,
  onClosePopup
}) {
  const [cardLikeButtonClassName, setcardLikeButtonClassName] =
    useState(isLiked);

  function onCardClik() {
    setcardLikeButtonClassName(!cardLikeButtonClassName);
    toggleLike(cardLikeButtonClassName, cardId);
  }
  function handleDeleteCard() {
    onCardDelete(cardId);
  }

  function handleClickCard(){
    onOpenPopup({children: <ImagePopup card={{name, link}} onClosePopup={onClosePopup} />});
  }
  return (
    <>
      <li className="gallery__element">
        <img
          type="button"
          src={trash}
          alt="lixeira"
          className="gallery__lixeira"
          onClick={handleDeleteCard}
        />
        <img
          type="button"
          src={link}
          alt={name}
          onClick={handleClickCard}
          className="gallery__img"
        />
        <div className="gallery__card">
          <h2 className="gallery__title">{name}</h2>
          <img
            type="button"
            src={like}
            alt="like"
            className={`gallery__like ${
              cardLikeButtonClassName ? "gallery__like-click" : ""
            }`}
            onClick={() => onCardClik()}
          />
        </div>
      </li>
    </>
  );
}
