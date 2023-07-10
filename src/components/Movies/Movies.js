import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Response from "../Response/Response";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import api from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi";
import "./Movies.css";


function Movies({ isLoggedIn, openSideMenu, isVisible, savedMovies, onMovieClick }) {
    const [currentUser, setCurrentUser] = React.useState({})
    const [allMovies, setAllMovies] = React.useState([]);
    const [foundMovies, setFoundMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [responseMessage, setResponseMessage] = React.useState("");
    const [isNoMovies, setIsNoMovies] = React.useState(false);


    function getAllMovies() {
        setIsLoading()
        getMovies()
            .then((res) => {
                setAllMovies(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }

    React.useEffect(() => {
        getAllMovies()

    }, [])

    function searchMovies({ allMovies, isShortMovie, serchText }) {
        let foundMovies = allMovies;
        console.log(foundMovies)
        foundMovies = foundMovies.filter((movie) => movie.nameRU.toLowerCase().includes(serchText.toLowerCase()));
        if (foundMovies === 0) {
            setResponseMessage("Ничего не найдено")
            setIsNoMovies(true);
        } else if (isShortMovie) {
            foundMovies = foundMovies.filter((movie) => movie.duration < 40)
        }
        setAllMovies(foundMovies);
    }


    return (
        <div className="movies">
            <Header
                isLoggedIn={isLoggedIn}
                isVisible={true}
                openSideMenu={openSideMenu} />
            <main className="movies__content">
                <SearchForm
                    allMovies={allMovies}
                    onSerchMovies={searchMovies} />
                {!isNoMovies ? (<MoviesCardList
                    isLoading={isLoading}
                    movies={allMovies}
                    onMovieClick={onMovieClick}
                />) : (<Response
                    responseMessage={responseMessage}
                />)
                }
            </main>
            <Footer />
        </div>
    )
}
export default Movies

