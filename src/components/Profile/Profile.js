import "../Profile/Profile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Profile() {
    return (
        <div class='profile'>
            <Header />
            <main class='profile__content'>
                <h2 class="profile__title">Привет, Евгения!</h2>
                <form class="profile__form">
                    <input class="profile__input" placeholder="Имя"/>Евгения
                    
                    <input class="profile__input" placeholder="E-mail"/>morg.evgenya@yandex.ru
                   
                    <button class="profile__btn">Редактировать</button>
                </form>
                <button class="profile__btn profile__btn_red">Выйти из аккаунта</button>
            </main>
            <Footer />
        </div>

    )
}
export default Profile;