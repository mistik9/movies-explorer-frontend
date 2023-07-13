import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation({ isLoggedIn, openSideMenu, }) {
    console.log(isLoggedIn)
    return (
        <div>
            <ul className={`navigation__list ${!isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li className="navigation__list-item">
                    <NavLink to="/signup" className="navigation__link navigation__link_signup">Регистрация</NavLink>
                </li>
                <li className="navigation__list-item">
                    <NavLink to="/signin" className="navigation__link navigation__link_signin">Войти</NavLink>
                </li>
            </ul>
            <ul className={`navigation__list navigation__list_movie  ${isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li className="navigation__list-item">
                    <NavLink to="/movies" className={({ isActive }) => `navigation__link navigation__link_movies ${isActive ? "navigation__link_active" : ""}`}>Фильмы</NavLink>
                </li>
                <li className="navigation__list-item">
                    <NavLink to="/saved-movies" className={({ isActive }) => `navigation__link navigation__link_saved-movies ${isActive ? "navigation__link_active" : ""}`}>Сохраненные фильмы</NavLink>
                </li>
                <li className="navigation__list-item">
                    <NavLink to="/profile" className="navigation__link navigation__link_profile"> Аккаунт</NavLink>
                    <div className="navigation__icon_profile" ></div>
                </li>
            </ul>
            {isLoggedIn ? (<button className="navigation__menu" onClick={openSideMenu}>
                <span className="navigation__menu-line"></span>
                <span className="navigation__menu-line"></span>
                <span className="navigation__menu-line"></span>
            </button >) : ""}
        </div>

    )
}
export default Navigation