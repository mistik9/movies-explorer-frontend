import "./Navigation.css"

function Navigation() {
    return (
        <ul class="navigation__list">
            <li class="navigation__link navigation__link_signup">Регистрация</li>
            <li class="navigation__link navigation__link_signup">Войти</li>
            <li class="navigation__link navigation__link_movies">Фильмы</li>
            <li class="navigation__link navigation__link_saved-movies">Сохраненные фильмы</li>
            <li class="navigation__link navigation__link_profile">Аккаунт</li>
        </ul>
    //     <button className={isMenuOpen ? "header__menu header__menu_hide " : "header__menu"} onClick={openMenu}>
    //     <span className="header__menu-line"></span>
    //     <span className="header__menu-line"></span>
    //     <span className="header__menu-line"></span>
    //   </button>

    )
}
export default Navigation