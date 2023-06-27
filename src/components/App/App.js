import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Route, Routes, useNavigate, Navigate, Switch } from "react-router-dom";
import React from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import SideMenu from "../SideMenu/SideMenu";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/MainApi";
import Popup from "../Popup/Popup";


function App() {
    const [isRegister, setIsRegister] = React.useState(false);
    const [isLoggedIn, setIsloggedIn] = React.useState(false);
    const [isSideMenuOpen, setIsSidemenuOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);
    const [userData, setUserData] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState("");
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [infoMessage, setInfoMessage] = React.useState({ isSuccess: false, message: "" })

    const navigate = useNavigate()

    //открытие закрытие сайдменю
    function openSideMenu() {
        setIsSidemenuOpen(true);
    }

    function closeSideMenu() {
        setIsSidemenuOpen(false);
    }

    //закрытие попапа
    function closePopup() {
        setIsPopupOpen(false);
    }

    //сообщение при регистрации
    function handleShowInfoMessage(message) {
        setInfoMessage(message)
    }

    //регистрация
    function handleRegister({ email, password, name }) {
        api.register({ email, password, name })
            .then((res) => {
                if (!res.error)
                    setIsPopupOpen(true)
                setInfoMessage({ isSuccess: true, message: "Вы успешно зарегистрировались!" })
                setIsloggedIn(true)
                navigate("/movies", { replace: true });
                setUserData(res.user);


            })
            .catch((err) => {
                setIsPopupOpen(true)
                setInfoMessage({ isSuccess: false, message: "Что-то пошло не так! Попробуйте ещё раз." })
                console.log(err)
            })
    }
    //авторизация
    function handleLogin({ email, password }) {
        api.authorize(email, password)
            .then((res) => {
                setIsloggedIn(true);
                navigate("/movies", { replace: true });
                setUserData(res.user);
            })
            .catch((err) => {
                setIsPopupOpen(true)
                setInfoMessage({ isSuccess: false, message: "Что-то пошло не так! Попробуйте ещё раз." })
                console.log(err)
            })
    }
    //проверка токена
    function handleTokenCheck() {
        api.checkToken()
            .then((data) => {
                if (data) {
                    setIsloggedIn(true);
                    console.log(data)
                    navigate("/movies", { replace: true })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    React.useEffect(() => {
        handleTokenCheck();
    }, [])

    //выйти
    function handleLogOut() {
        setIsloggedIn(false);
        setUserData({});

    }

    //загрузка данных о пользователе 
    React.useEffect(() => {
        if (isLoggedIn) {
            api.getUserData()
                .then((userData) => {
                    setCurrentUser(userData)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [isLoggedIn])

      //редактирование данных профиля
  function handleUpdateUser(data) {
    api.updateUserData(data)
      .then(res => {
        setCurrentUser(res);
        closePopup()
        console.log(res)
      })
      .catch((err) => console.log(err));
  }



    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div>
                <Routes>
                    <Route path="/signup" element={
                        <Register onRegister={handleRegister} />
                    } />

                    <Route path="/signin" element={
                        <Login onLogin={handleLogin} />
                    } />
                    <Route path="/" element={
                        <Main isLoggedIn={isLoggedIn} />
                    } />
                    <Route path="/movies" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<Movies isLoggedIn={isLoggedIn} />}
                        />
                    } />
                     <Route path="/saved-movies" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<SavedMovies isLoggedIn={isLoggedIn} />}
                        />
                    } />
                              <Route path="/profile" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<Profile isLoggedIn={isLoggedIn} onLogout={handleLogOut} onUpdateUser={handleUpdateUser}/>}
                        />
                    } />
                       </Routes>
                <SideMenu isOpen={isSideMenuOpen} onClose={closeSideMenu} />
                <Popup isOpen={isPopupOpen} message={infoMessage.message} isSuccess={infoMessage.isSuccess} onClose={closePopup} />
            </div>
        </CurrentUserContext.Provider>
    )
}
export default App;