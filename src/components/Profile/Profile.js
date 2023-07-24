import React from "react";
import "../Profile/Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useForm";




function Profile({ onUpdateUser, isLoggedIn, onLogout, openSideMenu, isVisible }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [activeBtn, setActiveBtn] = React.useState(false)


    const { values, errors, isValid,handleChange } = useFormWithValidation(currentUser)

    React.useEffect(() => {
        setName(values.name || currentUser.name);
        setEmail(values.email || currentUser.email);
    }, [currentUser, values]);
    
    React.useEffect(() => {
        if ((values.name === currentUser.name || values.email === currentUser.email)) {
                 setActiveBtn(false)
        } else {
            setActiveBtn(true)
        }
    }, [currentUser, values]);

    function handleSubmit(e) {
        e.preventDefault();
           if (isValid) {
            onUpdateUser({name, email});

        }
    }

    return (
        <div className="profile">
            <Header isLoggedIn={isLoggedIn} isVisible={true} openSideMenu={openSideMenu} />
            <main className="profile__content">
                <h2 className="profile__title">Привет, {currentUser.name}
                    !</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <label className="profile__input-label">
                        <span className="profile__subtitle">Имя</span>
                        <input className="profile__input"
                            type="name"
                            id="name"
                            name="name"
                            pattern="[A-Za-zА-Яа-яЁё\s\-]+"
                            value={values.name ?? currentUser.name}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="200"
                            required />
                        <span className="profile__error" >{errors.name}</span>
                    </label>
                    <label className="profile__input-label profile__input-label_last">
                        <span className="profile__subtitle">E-mail</span>
                        <input className="profile__input"
                            type="text"
                            id="email"
                            name="email"
                            pattern='^[^ ]+@[^ ]+\.[a-z]{2,3}$'
                            value={values.email ?? currentUser.email}
                            onChange={handleChange}
                            required
                            minLength="2"
                            maxLength="40" />
                        <span id="password-error" className="profile__error">{errors.email}</span>
                    </label>
                    <button className="profile__btn profile__btn_edit" type="submit" disabled={!isValid || !activeBtn}>Редактировать</button>
                </form>
                <button className="profile__btn profile__btn_red" onClick={onLogout}>Выйти из аккаунта</button>
            </main>

        </div>

    )
}
export default Profile;