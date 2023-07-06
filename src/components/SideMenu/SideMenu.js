import React from "react";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import "./SideMenu.css"

function SideMenu({ isOpen, onClose, isLoggedIn, openSideMenu }) {
  return (
    <div className={`side-menu ${isOpen ? "side-menu_opened" : ""}`}>
      <div className="side-menu__container">
        <button className="side-menu__close" type="button" onClick={onClose}></button>
        <ul className="side-menu__list">
          <li className="side-menu__list-item">
            <NavLink to="/" className={({isActive}) => `side-menu__link  ${isActive ? "side-menu__link_active" : ""}`}> Главная</NavLink></li>
          <li className="side-menu__list-item">
          <NavLink  to="/movies" className={({isActive}) => `side-menu__link side-menu__link_movies ${isActive ? "side-menu__link_active" : ""}`}>Фильмы</NavLink></li>
          <li className="side-menu__list-item">
          <NavLink  to="/saved-movies" className={({isActive}) => `side-menu__link side-menu__link_saved-movies ${isActive ? "side-menu__link_active" : ""}`}>Сохраненные фильмы</NavLink></li>
          <li className="side-menu__list-item side-menu__list-item_profile">
            <NavLink to="/profile" className="side-menu__link side-menu__link_profile">Аккаунт</NavLink>
            <div className="side-menu__icon_profile" ></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu;

