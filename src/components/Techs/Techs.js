import React from "react";
import "./Techs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
    return (
        <section class="techs">
            <SectionTitle title="Технологии" />
            <div class="techs__discription">
                <h2 class="techs__title">7 технологий</h2>
                <p class="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul class="techs__list">
                <li class="techs__item">HTML</li>
                <li class="techs__item">CSS</li>
                <li class="techs__item">JS</li>
                <li class="techs__item">React</li>
                <li class="techs__item">Git</li>
                <li class="techs__item">Express.js</li>
                <li class="techs__item">mongoDB</li>
            </ul>
        </section>
    )
}
export default Techs;