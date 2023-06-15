import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer class="footer">
            <p class="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div class="footer__block">
                <p class="footer__copyright">&#169;2023</p>
                <ul class="footer__links">
                    <li><a class="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a></li>
                    <li><a class="footer__link" href="https://github.com/mistik9" target="_blank">Github</a></li>
                </ul>
            </div>

        </footer>
    )
}
export default Footer;