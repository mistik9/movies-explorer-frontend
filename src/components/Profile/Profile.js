import "../Profile/Profile.css";
import Header from "../Header/Header";


function Profile({ isLoggedIn }) {
    return (
        <div class='profile'>
            <Header isLoggedIn={true}/>
            <main class='profile__content'>
                <h2 class="profile__title">Привет, Евгения!</h2>
                <form class="profile__form">
                    <label class="profile__input-label"></label>
                    <span className="profile__subtitle">Имя</span>
                    <input class="profile__input" name="name" required/>
                                        <label class="profile__input-label"></label>
                    <span className="profile__subtitle">E-mail</span>
                        <input class="profile__input"/>
                    
                    <button class="profile__btn profile__btn_edit">Редактировать</button>
                </form>
                <button class="profile__btn profile__btn_red">Выйти из аккаунта</button>
            </main>
   
        </div>

    )
}
export default Profile;