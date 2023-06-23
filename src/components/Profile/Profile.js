import "../Profile/Profile.css";
import Header from "../Header/Header";


function Profile({ isLoggedIn, isVisible }) {
    return (
        <div className="profile">
            <Header isLoggedIn={true} isVisible={true}/>
            <main className="profile__content">
                <h2 className="profile__title">Привет, Евгения!</h2>
                <form className="profile__form">
                    <label className="profile__input-label"></label>
                    <span className="profile__subtitle">Имя</span>
                    <input className="profile__input" name="name" required/>
                                        <label className="profile__input-label"></label>
                    <span className="profile__subtitle">E-mail</span>
                        <input className="profile__input"/>
                    
                    <button className="profile__btn profile__btn_edit">Редактировать</button>
                </form>
                <button className="profile__btn profile__btn_red">Выйти из аккаунта</button>
            </main>
   
        </div>

    )
}
export default Profile;