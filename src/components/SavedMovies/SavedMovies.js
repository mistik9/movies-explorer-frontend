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

    // React.useEffect(() => {
    //     api.getMovies()
    //         .then((res) => setSavedMovies(res))
    //         .catch((err) => console.log(err))
    // }, [isSavedMovies]);

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
                />
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