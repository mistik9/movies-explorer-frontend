import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./SideMenu.css"

function SideMenu({ isOpen, onClose, isLoggedIn, openSideMenu }) {

  return (
    <div className={`side-menu ${isOpen ? "side-menu_opened" : ""}`}>
      <div className="side-menu__container">
        <button className="side-menu__close" type="button" onClick={onClose}></button>

        <ul className="side-menu__list">
          <li className="side-menu__list-item">
            <Link to="/" className="side-menu__link"> Главная</Link></li>
          <li className="side-menu__list-item">
            <Link to="/movies" className="side-menu__link side-menu__link_active"> Фильмы</Link></li>
          <li className="side-menu__list-item">
            <Link to="/saved-movies" className="side-menu__link "> Сохраненные фильмы</Link></li>
          <li className="side-menu__list-item side-menu__list-item_profile">
            <Link to="/profile" className="side-menu__link side-menu__link_profile">Аккаунт</Link>
            <div className="side-menu__icon_profile" ></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu;

