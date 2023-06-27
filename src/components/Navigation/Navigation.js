import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation({ isLoggedIn, openSideMenu, }) {
    return (
        <div>
            <ul className={`navigation__list ${!isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li className="navigation__list-item">
                    <Link to="/signup" className="navigation__link navigation__link_signup">Регистрация</Link>
                </li>
                <li className="navigation__list-item">
                    <Link to="/signin" className="navigation__link navigation__link_signin">Войти</Link>
                </li>
            </ul>
            <ul className={`navigation__list navigation__list_type-movie  ${isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li className="navigation__list-item">
                    <Link to="/movies" className="navigation__link navigation__link_movies">Фильмы</Link>
                </li>
                <li className="navigation__list-item">
                    <Link to="/saved-movies" className="navigation__link navigation__link_saved-movies">Сохраненные фильмы</Link>
                </li>
                <li className="navigation__list-item">
                    <Link to="/profile" className="navigation__link navigation__link_profile"> Аккаунт</Link>
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