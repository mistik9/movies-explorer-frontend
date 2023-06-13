import React from "react";
import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Photo from "../../images/IMG_0493.jpeg"


function AboutMe() {
    return (
        <section class="about-me">
            <SectionTitle />Студент
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
                    <img class="about-me__portfolio-icon " alt="перейти на темную сторону"/>
                </li>
                <li class="about-me__portfolio-item">Адаптивный сайт</li>
                <li class="about-me__portfolio-item">Одностраничное приложение</li>
            </ul>



        </section>
    )
}
export default AboutMe;