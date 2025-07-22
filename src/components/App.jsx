import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./footer/Footer.jsx";
import React, { useState, useEffect } from "react";
import api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  
  //chamada de Usuario....entrada e saida de Popups....
  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, []);

  const handleUpdateAvatar = (avatar) => {
    api.setUserAvatar(avatar).then((res) => {
      return res.json();
    }).then(({ avatar }) => {
      handleClosePopup()
      setCurrentUser((preveUser) => ({
        ...preveUser,
        avatar: avatar
      }))
    }).catch((error) => { console.error("Error updating avatar:", error); })
  }
  
  const handleUpdateUser = (data) => {
    api
      .upDateUser(data)
      .then((res) => {
        return res.json();
      })
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

//chamda de Card........newCards......likes......upImage.....
  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.error("Error fetching cards:", err);
      });
  }, []);
  
  async function handleDeleteCard(cardId) {
    try{
      await api.deleteCard(cardId);

      setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
    } catch (err) {
      console.log("Error handleDeleteCard:", err);
    }
  }

  async function toggleLike(cardId, isLiked) {
    try {
      const response = await api.toLike(cardId, isLiked);
      const updatedCard = await response.json();

      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === updatedCard._id ? updatedCard : card
        )
      );
    } catch (err) {
      console.log("Error toggleLike:", err);
    }
  }

  async function handleAddPlaceSubmit({name, link}) {
    const newCard = await api.creatCard({name, link})

    const newCardData = await newCard.json();
    handleClosePopup()
    setCards([newCardData, ...cards])
    
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            onCardLike={toggleLike}
            onCardDelete={handleDeleteCard}
            cards={cards}
            popup={popup}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}
