import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Response from "../Response/Response";
import api from "../../utils/MainApi";

function SavedMovies({ isLoading, setIsLoading, savedMovies, setSavedMovies, isSavedMovies, onMovieClick, openSideMenu, isLoggedIn, foundSavedMovies, setFoundSavedMovies }) {
    const [responseMessage, setResponseMessage] = React.useState("");
    const [isNoMovies, setIsNoMovies] = React.useState(false);
    const [foundMoviesState, setFoundMoviesState] = React.useState([]);
    const [isShortMovie, setSiShortMovie] = React.useState(false);

    React.useEffect(() => {
        api.getMovies()
          .then((res) => {
            setSavedMovies(res)
            setFoundSavedMovies(res);
        })
          .catch((err) => console.log(err))
      }, [isSavedMovies]);
    
    return (
        <div className="saved-movies">
            <Header
                isLoggedIn={isLoggedIn}
                isVisible={true}
                openSideMenu={openSideMenu} />
            <main className="saved-movies__container">
                <SearchForm
                    allMovies={savedMovies}
                    setIsLoading={setIsLoading}
                    setResponseMessage={setResponseMessage}
                    setIsNoMovies={setIsNoMovies}
                    setFoundMoviesState={setFoundMoviesState}
                    isShortMovie={isShortMovie}
                    setSiShortMovie={setSiShortMovie}
                    setFoundMovies={setFoundSavedMovies}
                    isSavedMovies={isSavedMovies}
                />
                {isLoading ? <Preloader /> :
                    !isNoMovies ? <MoviesCardList
                        movies={foundSavedMovies}
                        savedMovies={savedMovies}
                        onMovieClick={onMovieClick}
                        isSavedMovies={isSavedMovies}
                        isShortMovie={isShortMovie}
                    /> : <Response
                        responseMessage={responseMessage}
                    />
                }

            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies