import React from "react";
import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Photo from "../../images/IMG_0493.jpeg"


function AboutMe() {
    return (
        <section className="about-me">
            <SectionTitle title="Студент"/>
            <div className="about-me__description">
                <h2 className="about-me__title">Евгения</h2>
                <img className="about-me__image" src={Photo} alt="мое фото" />

                <p className="about-me__subtitle">Фронтенд-разработчик, 37 лет</p>
                <p className="about-me__text">Я живу в Омске, закончила ОмГТУ. У меня есть муж
                    и дочь. Я люблю разное и всякая шляпа</p>
                <a className="about-me__link" href="https://github.com/mistik9" rel="noreferrer" target="_blank">Github</a>
            </div>

            <ul className="about-me__portfolio">Портфолио
                <li className="about-me__portfolio-item">Статичный сайт
                    <a href="mistik9.github.io/how-to-learn/" className="about-me__portfolio-icon " rel="noreferrer" target="_blank">&#x2197;</a>
                </li>
                <li className="about-me__portfolio-item">Адаптивный сайт
                <a href="https://mistik9.github.io/russian-travel/index.html" className="about-me__portfolio-icon " rel="noreferrer" target="_blank">&#x2197;</a>
                </li>
                <li className="about-me__portfolio-item">Одностраничное приложение
                <a href="https://mistik9mesto.nomoredomains.monster/" className="about-me__portfolio-icon " rel="noreferrer" target="_blank">&#x2197;</a></li>
            </ul>
             </section>
    )
}
export default AboutMe;