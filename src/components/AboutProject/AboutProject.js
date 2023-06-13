import React from "react";
import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
    return (
        <section class="about-project">
            <SectionTitle  />О проекте
            <ul class="about-project__list">
                <li>
                    <h3 class="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p class="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li>
                    <h3 class="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p class="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div class="about-project__spent-time">
                <p class="about-project__time about-project__time_short">1 неделя</p>
                <p class="about-project__time about-project__time_long">4 недели</p>
                <p class="about-project__item">Back-end</p>
                <p class="about-project__item">Front-end</p>
            </div>

        </section>
    )
}
export default AboutProject;