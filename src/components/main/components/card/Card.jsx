import trash from "../../../../image/Groupl1xe1ra.png";
import like from "../../../../image/Vector-like.png";
import ImagePopup from "../imagePopup/ImagePopup";

export default function Card({ name, link, handleOpenPopup, isLiked }) {
  console.log(name)
  return (

    <>
      <li className="gallery__element">
          <img
            type="button"
            src={trash}
            alt="lixeira"
            className="gallery__lixeira"
          />
          <img type="button" src={link} alt=" " onClick={() => handleOpenPopup({children: <ImagePopup />})} className="gallery__img" />
          <div className="gallery__card">
            <h2 className="gallery__title">{name}</h2>
            <img src={like} alt="like" className="gallery__like" />
          </div>
      </li>
    </>
  );
}
