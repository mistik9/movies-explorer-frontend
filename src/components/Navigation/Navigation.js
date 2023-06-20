import "./Navigation.css"

function Navigation({ isLoggedIn }) {
    return (
        <>
        <ul class={`navigation__list ${ !isLoggedIn ? "" : "navigation__list_hidden"}`}>
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

        </>

    )
}
export default Navigation