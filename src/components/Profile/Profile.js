import React from "react";
import "../Profile/Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";





function Profile({ onUpdateUser, isLoggedIn, onLogOut, isVisible }) {
    const currentUser = React.useContext(CurrentUserContext);
        const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);


    React.useEffect(() => {
        setName(currentUser.name || "");
        setEmail(currentUser.email || "");
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ name, email });

    }
    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <div className="profile">
            <Header isLoggedIn={isLoggedIn} isVisible={true} />
            <main className="profile__content">
                <h2 className="profile__title">Привет,{name}
                !</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <label className="profile__input-label"></label>
                    <span className="profile__subtitle">Имя</span>
                    <input className="profile__input" name="name" values={name} onChange={handleChangeName} required/>
                    <label className="profile__input-label"></label>
                    <span className="profile__subtitle">E-mail</span>
                    <input className="profile__input" name="email" values={currentUser.email} onChange={handleChangeEmail}required/>

                    <button className="profile__btn profile__btn_edit" type="submit">Редактировать</button>
                </form>
                <button className="profile__btn profile__btn_red"onClick={onLogOut}>Выйти из аккаунта</button>
            </main>

        </div>

    )
}
export default Profile;