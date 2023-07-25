import React from "react";
import "../Register/Register.css";
import Logo from "../Logo/Logo";
import { Link, Navigate } from "react-router-dom";
import Form from "../Form/Form";


function Register({ onRegister, isRegister, isLoggedIn }) {


    return (
        isLoggedIn ? (<Navigate to="/" replace />) :
            (<main className="register">
                <Logo />
                <h2 className="register__title">Добро пожаловать!</h2>
                <Form isRegister={true} onSubmit={onRegister} />
                <div className="register__sign-in">
                    <p className="register__sign-in-text">Уже зарегистрированы? </p>
                    <Link to="/signin" className="register__sign-in-link"> Войти</Link>
                </div>
            </main>
            )
    )
}
export default Register;