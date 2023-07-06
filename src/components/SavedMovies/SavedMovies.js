import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import api from "../../utils/MainApi";


function SavedMovies({ savedMovies,isSavedMovies,isLoading, onMovieClick, searchMovies, openSideMenu }) {

    const [allSavedMovies, setAllSavedMovies] = React.useState([])


    function getAllMovies() {
        api.getMovies()
            .then((res) => {
                setAllSavedMovies(res)
            })
            .catch((err) => console.log(err))
    }

    React.useEffect(() => {
        getAllMovies()

    }, [])


    return (
        <div className="saved-movies">
            <Header
                isLoggedIn={true}
                isVisible={true}
                openSideMenu={openSideMenu} />
            <main className="saved-movies__container">
                <SearchForm
                    allSavedMovies={allSavedMovies}
                    onSerchMovies={searchMovies} />
                <MoviesCardList
                    movies={allSavedMovies}
                    isLoading={isLoading}
                    // movies={savedMovies}
                    onMovieClick={onMovieClick}
                    isSavedMovies={isSavedMovies}
                />
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies