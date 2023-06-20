import React from "react";
import "../Form/Form.css";

function Form({ isRegister }) {
    return (

<form class="form">
    {isRegister ? (
<label class="form-label">Имя
<input type="name" id="name"  className="form__input form__input_type_name" required
    minLength="2" maxLength="200" />
<span id="name-error" className="error"></span>
</label>) : ""}
<label class="form-label">Email
<input type="text" id="email" className="form__input form__input_type_email" required
    minLength="2" maxLength="40" />
<span id="email-error" className="error"></span>
</label>
<label class="form-label">Пароль
<input type="password" id="password"  className="form__input form__input_type_password" required
    minLength="2" maxLength="200" />
<span id="password-error" className="error"></span>
<label></label>
</label>
<button className={`form__save ${isRegister ? "" : "form__save_signin"}`} type="submit">{isRegister ? "Зарегистрироваться" : "Войти"}</button>
</form>
    )
}
export default Form;