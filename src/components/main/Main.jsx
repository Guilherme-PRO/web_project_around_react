import btnPerfil from "../../image/EditButtoncaixaidt.png";
import btnCard from "../../image/AddButtoncaixa+.png";
import btnAvatar from "../../image/Vector.png";
import EditAvatar from "./components/popup/components/editAvatar/EditAvatar";
import EditProfile from "./components/popup/components/editProfile/EditProfile";
import NewCard from "./components/popup/components/newCard/NewCard";
import Popup from "../main/components/popup/Popup.jsx";
import Card from "./components/card/Card"
import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];
console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New Card", children: <NewCard /> };
  const EditAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };
  const EditProfilePopup = { title: "Edit Profile", children: <EditProfile /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__new">
          <div className="profile__photo">
            <img
              src="src\image\imageperfil02.png"
              alt="foto-avatar"
              className="profile__photo-avatar"
              id="perfil"
            />
            <img
              type="button"
              src={btnAvatar}
              alt="foto-avatar"
              className="profile__photo-perfil"
              onClick={() => handleOpenPopup(EditAvatarPopup)}
            />
          </div>
          <div className="profile__edit">
            <div className="profile__avatar-name">
              <h1 className="profile__title">Jacques Cousteau</h1>
              <img
                type="button"
                src={btnPerfil}
                alt="btn-edit"
                className="profile__edit-avatar"
                onClick={() => handleOpenPopup(EditProfilePopup)}
              />
            </div>
            <h2 className="profile__subtitle">Explorador</h2>
          </div>
          <img
            src={btnCard}
            alt="buttonAddCads"
            className="profile__add"
            id="openTwoButton"
            onClick={() => handleOpenPopup(newCardPopup)}
          />
        </div>
      </section>
      <section className="gallery">
        <ul className="gallery__elements">
          {cards.map((card) => (
            <Card key={card._id} name={card.name} link={card.link} handleOpenPopup={handleOpenPopup} />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
