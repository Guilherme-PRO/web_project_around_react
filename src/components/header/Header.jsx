import React from "react";
import logo from "../../image/VectorlogoAround.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Around the U.S logo" className="header__logo" />
      <div className="header__line"></div>
    </header>
  );
}

export default Header;