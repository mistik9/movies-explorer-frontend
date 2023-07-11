import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__block">
                <p className="footer__copyright">&#169;2023</p>
                <ul className="footer__links">
                    <li className="footer__links-item"><a className="footer__link" href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank">Яндекс.Практикум</a></li>
                    <li className="footer__links-item"><a className="footer__link" href="https://github.com/mistik9" rel="noreferrer" target="_blank">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;