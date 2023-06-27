import React from "react";
import "../Form/Form.css";

function Form({ isRegister, onSubmit }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");


    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ email, password, name })
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {isRegister ? (
                <label className="form-label">Имя
                    <input type="name" id="name" value={name} onChange={handleChangeName} className="form__input form__input_type_name" required
                        minLength="2" maxLength="200" />
                    <span id="name-error" className="error"></span>
                </label>) : ""}
            <label className="form-label">Email
                <input type="text" id="email" value={email} onChange={handleChangeEmail} className="form__input form__input_type_email" required
                    minLength="2" maxLength="40" />
                <span id="email-error" className="error"></span>
            </label>
            <label className="form-label">пароль
                <input type="password" id="password" value={password} onChange={handleChangePassword} className="form__input form__input_type_password" required
                    minLength="2" maxLength="200" />
                <span id="password-error" className="error"></span>
                <label></label>
            </label>
            <button className={`form__save ${isRegister ? "" : "form__save_signin"}`} type="submit">{isRegister ? "Зарегистрироваться" : "Войти"}</button>
        </form>
    )
}
export default Form;