import React from "react";
import "../Form/Form.css";
import { useFormWithValidation } from "../../utils/useForm";


function Form({ isRegister, onSubmit }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(values)

    }
    const { values, errors, isValid, handleChange } = useFormWithValidation()


    return (
        <form className="form" isValid={isValid}  onSubmit={handleSubmit}>
            {isRegister ? (
                <label className="form-label">Имя
                    <input type="name"
                        id="name"
                        name="name"
                        pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                        required value={values.name || ""}
                        onChange={handleChange}
                        className="form__input form__input_type_name"
                        minLength="2"
                        maxLength="200" />
                    <span className="form__error" >{errors.name}</span>
                </label>) : ""}
            <label className="form-label">Email
                <input type="text"
                    id="email"
                    name="email"
                    pattern='^[^ ]+@[^ ]+\.[a-z]{2,3}$'
                    required
                    value={values.email || ""}
                    onChange={handleChange}
                    className="form__input form__input_type_email"
                    minLength="2"
                    maxLength="40" />
                <span id="email-error" className="form__error">{errors.email} {errors.email === 'Введите данные в указанном формате.' ? 'username@hostname' : ''}</span>
            </label>
            <label className="form-label">пароль
                <input type="password"
                    id="password"
                    name="password"
                    required value={values.password || ""}
                    onChange={handleChange}
                    className="form__input form__input_type_password"
                    minLength="2"
                    maxLength="200" />
                <span id="password-error" className="form__error">{errors.password}</span>
            </label>
            <button className={`form__save ${isRegister ? "" : "form__save_signin"}`} type="submit" disabled={!isValid}> {isRegister ? "Зарегистрироваться" : "Войти"}</button>
        </form>
    )
}
export default Form;