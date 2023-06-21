import "./Navigation.css"

function Navigation({ isLoggedIn, isMenuOpen, openMenu }) {
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
            
            <input type="checkbox" id="side-checkbox" />
            <div class="side-panel">
                <label class="side-button-2" for="side-checkbox">+</label>
                <div class="side-title">Выдвижная панель:</div>
                <p>Информация в панеле</p>
            </div>
            <div class="side-button-1-wr">
                <label class="side-button-1" for="side-checkbox">
                    <div class="side-b side-open">Открыть</div>
                    <div class="side-b side-close">Закрыть</div>
                </label>
            </div>

        </>

    )
}
export default Navigation