import "./Navigation.css"

function Navigation({ isLoggedIn, openSideMenu,  }) {
      return (
        <div>
            <ul className={`navigation__list ${!isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li className="navigation__link navigation__link_signup">Регистрация</li>
                <li className="navigation__link navigation__link_signin">Войти</li>
            </ul>
            <ul className={`navigation__list navigation__list_type-movie  ${isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li className="navigation__link navigation__link_movies">Фильмы</li>
                <li className="navigation__link navigation__link_saved-movies">Сохраненные фильмы</li>
                <li className="navigation__link navigation__link_profile">Аккаунт
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