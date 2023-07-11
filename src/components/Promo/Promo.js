import React from "react";
import promoLogo from "../../images/promo-logo.svg";
import "./Promo.css";

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__image" src={promoLogo} alt="неведомо" />
        </section>
    )
}
export default Promo;