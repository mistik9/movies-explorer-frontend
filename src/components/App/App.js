import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
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
import { CONFLICT, AUTH_ERROR, CONFLICT_USER_MESSAGE, AUTH_ERROR_MESSAGE, SMT_WENT_WRONG, SIGNUP_MESSAGE, UPDATE_USER_DATA } from "../../utils/consts";
import getMovies from "../../utils/MoviesApi";



function App() {
    const [isLoggedIn, setIsloggedIn] = React.useState(false);
    const [isSideMenuOpen, setIsSidemenuOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [infoMessage, setInfoMessage] = React.useState({ isSuccess: false, message: "" })
    const [allMovies, setAllMovies] = React.useState([]);
    const [foundMovies, setFoundMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
    const defaultFoundMovies = JSON.parse(localStorage.getItem('foundMovies')) ?? [];
    const [foundMoviesState, setFoundMoviesState] = React.useState(defaultFoundMovies);

    const navigate = useNavigate()
    const location = useLocation();

    //открытие сайдменю
    function openSideMenu() {
        setIsSidemenuOpen(true);
    }

    // закрытие сайдменю
    function closeSideMenu() {
        setIsSidemenuOpen(false);
    }

    //закрытие попапа
    function closePopup() {
        setIsPopupOpen(false);
    }

    //регистрация
    function handleRegister({ email, password, name }) {
        api.register({ email, password, name })
            .then((res) => {
                setIsPopupOpen(true)
                setInfoMessage({ isSuccess: true, message: SIGNUP_MESSAGE })
                setIsloggedIn(true)
                setCurrentUser(res);
                navigate("/movies", { replace: true });
                console.log({isLoggedIn, currentUser, res })
            })
            .catch((err) => {
                if (err === CONFLICT) {
                    setIsPopupOpen(true)
                    setInfoMessage({ isSuccess: false, message: CONFLICT_USER_MESSAGE })
                } else
                    setIsPopupOpen(true)
                setInfoMessage({ isSuccess: false, message: SMT_WENT_WRONG })
            })
    }

    //авторизация
    function handleLogin({ email, password }) {
        api.authorize(email, password)
            .then((res) => {
                if (res.message === AUTH_ERROR) {
                    setInfoMessage({ isSuccess: false, message: AUTH_ERROR_MESSAGE })
                    setIsPopupOpen(true)
                } else {
                    setIsloggedIn(true);
                    navigate("/movies", { replace: true });
                    setCurrentUser(res);
                }
            })
            .catch((err) => {
                setInfoMessage({ isSuccess: false, message: SMT_WENT_WRONG })
                setIsPopupOpen(true)
                console.log(err)
            })
    }

    //выйти
    function handleLogout({ email }) {
        api.logout({ email })
            .then(() => {
                navigate("/", { replace: true })
                setIsloggedIn(false);
                setCurrentUser({});
                localStorage.clear();

            })
            .catch((err) => console.log(err))
    }

    //редактирование данных профиля
    function handleUpdateUser(data) {
        api.updateUserData(data)
            .then(res => {
                setCurrentUser(res);
                setIsPopupOpen(true)
                setInfoMessage({ isSuccess: true, message: UPDATE_USER_DATA })

            })
            .catch((err) => {
                setIsPopupOpen(true)
                setInfoMessage({ isSuccess: false, message: SMT_WENT_WRONG })
                console.log(err)
            });
    }

    // проверка токена
    function handleTokenCheck() {
        api.checkToken()
            .then((res) => {
                if (res) {
                    setCurrentUser(res)
                    setIsloggedIn(true);
                    navigate(location.pathname, { replace: true })
                }
            })
            .catch((err) => {
                localStorage.clear();
                console.log("Ошибка токена")
            })
    }

    React.useEffect(() => {
        handleTokenCheck();
    }, [])

    //загрузка данных о пользователе и всех фильмах
    React.useEffect(() => {
        if (isLoggedIn) {
            setIsLoading(true)
            Promise.all([api.getUserData(), getMovies()])
                .then(([currentUser, res]) => {
                    console.log({currentUser, res})
                    setCurrentUser(currentUser)
                    if (defaultFoundMovies.length > 0) {
                        setAllMovies(defaultFoundMovies);
                        setFoundMovies(defaultFoundMovies);
                    } else {
                        setAllMovies(res);
                        setFoundMovies(res);
                    }

                })
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false))
        }
    }, [isLoggedIn])


    // добавить в сохраненные
    function handleAddSavedMovie(movie) {
        api.addMovie(movie)
            .then(res => {
                setSavedMovies(() => [...savedMovies, res])
            })
            .catch((err) => console.log(err));
    }

    //удалить из сохраненных
    function handleDeleteSavedMovie(movie) {
        api.deleteMovie(movie)
            .then(res => {
                setSavedMovies((movies) => movies.filter((savedMovie) => savedMovie.id !== movie.id))
            })
            .catch((err) => {
                setIsPopupOpen(true)
                setInfoMessage({ isSuccess: false, message: SMT_WENT_WRONG })
                console.log(err);
            })
    }

    //переключатель сохранения фильмов
    function handleMovieClick(movie) {
        const isSaved = savedMovies.some((savedMovie) => savedMovie.id === movie.id ? true : false);
        if (isSaved) {
            const savedMovie = savedMovies.find((savedMovie) => savedMovie.id === movie.id);
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
                        <Register onRegister={handleRegister}
                            isLoggedIn={isLoggedIn}
                        />
                    } />

                    <Route path="/signin" element={
                        <Login onLogin={handleLogin}
                            isLoggedIn={isLoggedIn} />
                    } />
                    <Route path="/" element={
                        <Main
                            isLoggedIn={isLoggedIn} />
                    } />
                    <Route path="/movies" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<Movies
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            isLoggedIn={isLoggedIn}
                            savedMovies={savedMovies}
                            isSavedMovies={false}
                            openSideMenu={openSideMenu}
                            onMovieClick={handleMovieClick}
                            setFoundMoviesState={setFoundMoviesState}
                            foundMoviesState={foundMoviesState}
                            allMovies={allMovies}
                            setAllMovies={setAllMovies}
                            foundMovies={foundMovies}
                            setFoundMovies={setFoundMovies}
                        />}
                        />
                    } />
                    <Route path="/saved-movies" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<SavedMovies
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            isLoggedIn={isLoggedIn}
                            isSavedMovies={true}
                            savedMovies={savedMovies}
                            openSideMenu={openSideMenu}
                            onMovieClick={handleMovieClick}
                            setSavedMovies={setSavedMovies}
                            foundSavedMovies={foundSavedMovies}
                            setFoundSavedMovies={setFoundSavedMovies}
                        />}
                        />
                    } />
                    <Route path="/profile" element={
                        <ProtectedRoute isLoggedIn={isLoggedIn} element={<Profile
                            isLoggedIn={isLoggedIn}
                            openSideMenu={openSideMenu}
                            onLogout={handleLogout}
                            onUpdateUser={handleUpdateUser} />}
                        />
                    } />
                    <Route path="*" element={<NotFound />} />
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