import React from "react";
import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Photo from "../../images/IMG_0493.jpeg"


function AboutMe() {
    return (
        <section class="about-me">
            <SectionTitle title="Студент"/>
            <div class="about-me__description">
                <h2 class="about-me__title">Евгения</h2>
                <img class="about-me__image" src={Photo} alt="мое фото" />

                <p class="about-me__subtitle">Фронтенд-разработчик, 37 лет</p>
                <p class="about-me__text">Я живу в Омске, закончила ОмГТУ. У меня есть муж
                    и дочь. Я люблю разное и всякая шляпа</p>
                <a class="about-me__link" href="https://github.com/mistik9" target="_blank">Github</a>
            </div>

            <ul class="about-me__portfolio">Портфолио
                <li class="about-me__portfolio-item">Статичный сайт
                    <a href="mistik9.github.io/how-to-learn/" class="about-me__portfolio-icon " target="_blank">&#x2197;</a>
                </li>
                <li class="about-me__portfolio-item">Адаптивный сайт
                <a href="https://mistik9.github.io/russian-travel/index.html" class="about-me__portfolio-icon " target="_blank">&#x2197;</a>
                </li>
                <li class="about-me__portfolio-item">Одностраничное приложение
                <a href="https://mistik9mesto.nomoredomains.monster/" class="about-me__portfolio-icon " target="_blank">&#x2197;</a></li>
            </ul>
             </section>
    )
}
export default AboutMe;