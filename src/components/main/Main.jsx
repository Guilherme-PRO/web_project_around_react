import btnPerfil from "../../image/EditButtoncaixaidt.png";
import btnCard from "../../image/AddButtoncaixa+.png";
import btnAvatar from "../../image/Vector.png";
import EditAvatar from "./components/popup/components/editAvatar/EditAvatar";
import EditProfile from "./components/popup/components/editProfile/EditProfile";
import NewCard from "./components/popup/components/newCard/NewCard";
import Popup from "../main/components/popup/Popup.jsx";
import Card from "./components/card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function Main({onOpenPopup, onClosePopup, popup, onCardDelete, onCardLike, cards}) {
  const {currentUser} = useContext(CurrentUserContext);
  

  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const EditAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };
  const EditProfilePopup = { title: "Edit Profile", children: <EditProfile /> };

  return ( 
    <main className="main">
      <section className="profile">
        <div className="profile__new">
          <div className="profile__photo">
            <img
              src={currentUser?.avatar}
              alt="foto-avatar"
              className="profile__photo-avatar"
              id="perfil"
            />
            <img
              type="button"
              src={btnAvatar}
              alt="foto-avatar"
              className="profile__photo-perfil"
              onClick={() => onOpenPopup(EditAvatarPopup)}
            />
          </div>
          <div className="profile__edit">
            <div className="profile__avatar-name">
              <h1 className="profile__title">{currentUser?.name}</h1>
              <img
                type="button"
                src={btnPerfil}
                alt="btn-edit"
                className="profile__edit-avatar"
                onClick={() => onOpenPopup(EditProfilePopup)}
              />
            </div>
            <h2 className="profile__subtitle">{currentUser?.about}</h2>
          </div>
          <img
            src={btnCard}
            alt="buttonAddCads"
            className="profile__add"
            id="openTwoButton"
            onClick={() => onOpenPopup(newCardPopup)}
          />
        </div>
      </section>
      <section className="gallery">
        <ul className="gallery__elements">
          {cards &&
            cards.map((card) => (
              <Card
                key={card._id}
                name={card.name}
                link={card.link}
                cardId={card._id}
                onOpenPopup={onOpenPopup}
                isLiked={card.isLiked}
                toggleLike={(isLiked) => onCardLike(card._id, isLiked)}
                onCardDelete={() => onCardDelete(card._id)}
              />
            ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
