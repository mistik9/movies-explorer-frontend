import React from "react";
import "../NotFound/NotFound.css";

function NotFound() {
    return (
        <div className="notfound">
            <h1 className="notfound__title">404</h1>
            <p className="notfound__subtitle">Страница не найдена</p>
            <button className="notfound__btn">Назад</button>
        </div>

    )
}
export default NotFound;