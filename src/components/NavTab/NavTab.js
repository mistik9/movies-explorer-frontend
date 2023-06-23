import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <section className="nav-tab">
            <ul className="nav-tab__menu">
                <li className="nav-tab__menu-item">О проекте</li>
                <li className="nav-tab__menu-item">Технологии</li>
                <li className="nav-tab__menu-item">Студент</li>
            </ul>
        </section>
    )
}
export default NavTab;