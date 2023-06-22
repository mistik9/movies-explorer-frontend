import "./Navigation.css"

function Navigation({ isLoggedIn, isMenuOpen, openSideMenu,  }) {
    return (
        <>
            <ul class={`navigation__list ${!isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li class="navigation__link navigation__link_signup">Регистрация</li>
                <li class="navigation__link navigation__link_signin">Войти</li>
            </ul>
            <ul class={`navigation__list ${isLoggedIn ? "" : "navigation__list_hidden"}`}>
                <li class="navigation__link navigation__link_movies">Фильмы</li>
                <li class="navigation__link navigation__link_saved-movies">Сохраненные фильмы</li>
                <li class="navigation__link navigation__link_profile">Аккаунт
                    <div class="navigation__icon_profile" ></div>
                </li>
            </ul>
            <button className={isMenuOpen ? "navigation__menu navigation__menu_hidden" : "navigation__menu"} onClick={openSideMenu}>
                <span className="navigation__menu-line"></span>
                <span className="navigation__menu-line"></span>
                <span className="navigation__menu-line"></span>
            </button >
        </>

    )
}
export default Navigation