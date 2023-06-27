import React from "react";
import "../Popup/Popup.css";


function Popup({ message, isOpen, onClose,}) {

    return (
        <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" onClick={onClose}></button>
                <p className="popup__message">{message}</p>
            </div>
        </section>
    )
}

export default Popup;