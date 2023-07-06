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
import { CONFLICT, CONFLICT_USER_MESSAGE, SERVER_MESSAGE } from "../../utils/consts"


function App() {
    const [isRegister, setIsRegister] = React.useState(false);
    const [isLoggedIn, setIsloggedIn] = React.useState(false);
    const [isSavedMovies, setIsSavedMovies] = React.useState(false);
    const [isSideMenuOpen, setIsSidemenuOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);
    const [userData, setUserData] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState("");
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [infoMessage, setInfoMessage] = React.useState({ isSuccess: false, message: "" })
    const [savedMovies, setSavedMovies] = React.useState([]);

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
                console.log(err)
                if (err === CONFLICT) {
                    setIsPopupOpen(true)
                    setInfoMessage({ isSuccess: false, message: CONFLICT_USER_MESSAGE })
                } else
                    setIsPopupOpen(true)
                setInfoMessage({ isSuccess: false, message: SERVER_MESSAGE })
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
                    navigate("/movies", { replace: true })
                    getSavedMovies()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

// загрузка сохраненных фильмов
    function getSavedMovies() {
        api.getMovies()
            .then((res) => {
                console.log(res);
                setSavedMovies(res)
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

            })
            .catch((err) => console.log(err));
    }

    // добавить в сохраненные
    function handleAddSavedMovie(movie) {
        api.addMovie(movie)
            .then(res => {
                setSavedMovies(() => [...savedMovies, res])
            })
            .catch((err) => console.log(err));
    }

    //удалить из сохраненных
    function handleDeleteSavedMovie(_id) {
        api.deleteMovie(_id)
            .then(res => {
                setSavedMovies((movies) =>
                    movies.filter((savedMovie) => savedMovie._id !== res._id),
                )
            })
            .catch((err) => console.log(err));
    }


    function handleMovieClick(movie) {
        const isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)
        if (isSaved) {
            const savedMovie = savedMovies.find(
                (savedMovie) => savedMovie.movieId === movie.id)
            handleDeleteSavedMovie(savedMovie)
        } else {
            handleAddSavedMovie(movie)
        }
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
                        <ProtectedRoute
                            isLoggedIn={isLoggedIn} element={<Movies
                                isLoggedIn={isLoggedIn}
                                openSideMenu={openSideMenu}
                                savedMovies={savedMovies}
                                onMovieClick={handleMovieClick}

                            />}
                        />
                    } />
                    <Route path="/saved-movies" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<SavedMovies
                            isLoggedIn={isLoggedIn}
                            isSavedMovies={true}
                            savedMovies={savedMovies}
                            openSideMenu={openSideMenu}
                            onMovieClick={handleMovieClick}

                        />}
                        />
                    } />
                    <Route path="/profile" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<Profile
                            isLoggedIn={isLoggedIn}
                            onLogout={handleLogOut}
                            onUpdateUser={handleUpdateUser} />}
                        />
                    } />
                </Routes>
                <SideMenu
                    isOpen={isSideMenuOpen}
                    onClose={closeSideMenu} />
                <Popup
                    isOpen={isPopupOpen}
                    message={infoMessage.message}
                    isSuccess={infoMessage.isSuccess}
                    onClose={closePopup} />
            </div>
        </CurrentUserContext.Provider>
    )
}
export default App;