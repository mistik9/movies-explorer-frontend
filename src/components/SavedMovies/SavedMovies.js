import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Response from "../Response/Response";

function SavedMovies({ savedMovies, setSavedMovies, isSavedMovies, onMovieClick, openSideMenu, isLoggedIn }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [responseMessage, setResponseMessage] = React.useState("");
    const [isNoMovies, setIsNoMovies] = React.useState(false);
    const [foundMoviesState, setFoundMoviesState] = React.useState([]);
    const [isShortMovie, setSiShortMovie] = React.useState(false);

    return (
        <div className="saved-movies">
            <Header
                isLoggedIn={isLoggedIn}
                isVisible={true}
                openSideMenu={openSideMenu} />
            <main className="saved-movies__container">
                <SearchForm
                    allMovies={savedMovies}
                    setAllMovies={setSavedMovies}
                    setIsLoading={setIsLoading}
                    setResponseMessage={setResponseMessage}
                    setIsNoMovies={setIsNoMovies}
                    setSavedMovies={setSavedMovies}
                    setFoundMoviesState={setFoundMoviesState}
                    isShortMovie={isShortMovie}
                    setSiShortMovie={setSiShortMovie}
                />
                {isLoading ? <Preloader /> :
                    !isNoMovies ? <MoviesCardList
                        movies={savedMovies}
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