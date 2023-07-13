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

    const defaultFoundMovies = JSON.parse(localStorage.getItem('foundMovies')) ?? [];
    const [foundMoviesState, setFoundMoviesState] = React.useState(defaultFoundMovies);
  
    
    React.useEffect(() => {
      localStorage.setItem('foundMovies', JSON.stringify(foundMoviesState));
  }, [foundMoviesState]);


    function searchMovies(savedMovies, isShortMovie, serchText,) {
        setIsLoading(true)
        let foundMovies = savedMovies;
        foundMovies = foundMovies.filter((movie) => movie.nameRU.toLowerCase().includes(serchText.toLowerCase()));
        if (foundMovies.length === 0) {
            setIsNoMovies(true)
            setResponseMessage("Ничего не найдено")
            setIsNoMovies(true);
        } else if (isShortMovie) {
            foundMovies = foundMovies.filter((movie) => movie.duration < 40)
        }
        setIsLoading(false);
        setSavedMovies(foundMovies);
        setFoundMoviesState(foundMovies);

    }

    return (
        <div className="saved-movies">
            <Header
                isLoggedIn={isLoggedIn}
                isVisible={true}
                openSideMenu={openSideMenu} />
            <main className="saved-movies__container">
                <SearchForm
                    allMovies={savedMovies}
                    onSearchMovies={searchMovies} />
                {isLoading ? <Preloader /> :
                    !isNoMovies ? <MoviesCardList
                        movies={savedMovies}
                        savedMovies={savedMovies}
                        onMovieClick={onMovieClick}
                        isSavedMovies={isSavedMovies}
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