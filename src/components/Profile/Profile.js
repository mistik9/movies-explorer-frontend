import React from "react";
import "../Profile/Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useForm";




function Profile({ onUpdateUser, isLoggedIn, onLogOut, isVisible }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);


    const { values, errors, isValid, handleChange } = useFormWithValidation()

    React.useEffect(() => {
        setName(currentUser.name || "");
        setEmail(currentUser.email || "");
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ name, email });

    }


    return (
        <div className="profile">
            <Header isLoggedIn={isLoggedIn} isVisible={true} />
            <main className="profile__content">
                <h2 className="profile__title">Привет, {values.name || currentUser.name}
                    !</h2>
                <form className="profile__form" isValid={isValid} onSubmit={handleSubmit}>
                    <label className="profile__input-label"></label>
                    <span className="profile__subtitle">Имя</span>
                    <input className="profile__input"
                        type="name"
                        id="name"
                        name="name"
                        pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
                        value={values.name || currentUser.name}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="200"
                        required />
                    <span className="profile__error" >{errors.name}</span>
                    <label className="profile__input-label"></label>
                    <span className="profile__subtitle">E-mail</span>
                    <input className="profile__input"
                        type="text"
                        id="email"
                        name="email"
                        pattern='^[^ ]+@[^ ]+\.[a-z]{2,3}$'
                        value={values.email || currentUser.email}
                        onChange={handleChange}
                        required
                        minLength="2"
                        maxLength="40" />
                    <span id="password-error" className="profile__error">{errors.email}</span>
                    <button className="profile__btn profile__btn_edit" type="submit" disabled={!isValid}>Редактировать</button>
                </form>
                <button className="profile__btn profile__btn_red" onClick={onLogOut}>Выйти из аккаунта</button>
            </main>

        </div>

    )
}
export default Profile;