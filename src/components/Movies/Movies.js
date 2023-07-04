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
    const [FoundMovies, isFoundMovies] = React.useState([]);

    const [serchText, setSerchText] = React.useState([]);
    const [isShortMovie, setSiShortMovie] = React.useState([]);



    function searchMovies(movies, isShortMovie, serchText) {
        let foundMovies = movies
         foundMovies = foundMovies.filter((movie) => movie.nameRU.tolowerCase().includes(serchText.tolowerCase()))
   if (isShortMovie) {
    foundMovies = foundMovies.filter((movie)=> movie.duration < 40)
   }
   return foundMovies
    }


    React.useEffect(() => {
        getMovies()
            .then((res) => {
                setAllMovies(res)
            })
            .catch((err) => console.log(err))
    }, [])

    // React.useEffect(() => {
    //     loopWithSlice(0, moviesPerPage);
    //   }, []);


    function handleSerchMovies(serchText, isShortMovie) {
        getMovies()
            .then((res) => {
                renderMovies(res)
       })
       .catch((err) => console.log(err))
    }


    function renderMovies() {
                setAllMovies()
           
   }

    function checkIsSaved(movie) {
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

    






    return (
        <div className="movies">
            <Header isLoggedIn={isLoggedIn} isVisible={true} openSideMenu={openSideMenu} />
            <main className="movies__content">
                <SearchForm onSerchMovies={handleSerchMovies} />
                <MoviesCardList movies={allMovies} renderMovies={renderMovies}
                //    OnClick={handleShowMorePosts}
                    isSaved={checkIsSaved}
                />
            </main>
            <Footer />
        </div>
    )
}
export default Movies