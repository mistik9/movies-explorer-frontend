import React from "react";
import "../NotFound/NotFound.css";

function NotFound() {
    return (
        <div class="notfound">
            <h1 class="notfound__title">404</h1>
            <p class="notfound__subtitle">Страница не найдена</p>
            <button class="notfound__btn">Назад</button>
        </div>

    )
}
export default NotFound;