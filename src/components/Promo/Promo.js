import React from "react";
import promoLogo from "../../images/promoLogo.svg";
import "./Promo.css";

function Promo() {
    return (
        <section class="promo">
            <h1 class="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img class="promo__image" src={promoLogo} alt="неведомо" />
        </section>
    )
}
export default Promo;