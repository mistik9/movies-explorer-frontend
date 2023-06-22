import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./SideMenu.css"

function SideMenu({ isOpen, onClose, openSideMenu }) {

  return (
    <div className={`side-menu ${isOpen ? "side-menu_opened" : ""}`}>
      <div className="side-menu__container">
        <button className="side-menu__close" type="button" onClick={onClose}></button>

        Бла бла бла
        <ul className="side-menu__list">
          <li>
          <Link to="/" className="side-menu__link"> Главная</Link></li>
          <li>
          <Link to="/movies" className="side-menu__link"> Фильмы</Link></li>
          <li>
          <Link to="/saved-movies" className="side-menu__link"> Сохраненные фильмы</Link></li>
          <li>
          <Link to="/profile" className="side-menu__link"> Аккаунт</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu;

