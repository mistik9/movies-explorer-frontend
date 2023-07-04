import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import api from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi";
import "./Movies.css";


function Movies({ isLoggedIn, openSideMenu, isVisible, savedMovies, onAddSavedMovie, onDeleteSavedMovie }) {
    const [currentUser, setCurrentUser] = React.useState({})
    const [allMovies, setAllMovies] = React.useState([]);
    const [isPreloader, setIsPreloader] = React.useState(false);
    const [foundMovies, setFoundMovies] = React.useState([]);




    function searchMovies(allMovies, isShortMovie, serchText) {
        let foundMovies = allMovies
        foundMovies = foundMovies.filter((movie) => movie.nameRU.toLowerCase().includes(serchText.toLowerCase()))
        console.log(foundMovies)
        if (isShortMovie) {
            foundMovies = foundMovies.filter((movie) => movie.duration < 40)
        }
        setAllMovies(foundMovies)
    }


    React.useEffect(() => {
        function getMovies() {
        getMovies()
            .then((res) => {
                setAllMovies(res)
            })
            .catch((err) => console.log(err))
        }

    }, [])



    function handleMovieClick(movie) {
        console.log(savedMovies)
        const isSaved = savedMovies.some(
            (savedMovie) => savedMovie.movieId === movie.id
        )
        if (isSaved) {
            onDeleteSavedMovie(movie)
        } else {
            onAddSavedMovie(movie)
        }
    }

    function handleSaveMovies(movie) {

    }








    return (
        <div className="movies">
            <Header isLoggedIn={isLoggedIn} isVisible={true} openSideMenu={openSideMenu} />
            <main className="movies__content">
                <SearchForm allMovies={allMovies} onSerchMovies={searchMovies} />
                <MoviesCardList
                    movies={allMovies}
                    savedMovies={savedMovies}
                    onMovieClick={handleMovieClick}
                />
            </main>
            <Footer />
        </div>
    )
}
export default Movies