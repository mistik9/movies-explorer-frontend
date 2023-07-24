import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Response from "../Response/Response";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import api from "../../utils/MainApi";

import "./Movies.css";


function Movies({ isLoggedIn, savedMovies, setSavedMovies, isSavedMovies, openSideMenu, onMovieClick, foundMoviesState, setFoundMoviesState, allMovies, setAllMovies }) {

  const [isLoading, setIsLoading] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");
  const [isNoMovies, setIsNoMovies] = React.useState(false);
  const defaultShortMovie = JSON.parse(localStorage.getItem('isShortMovie')) || false;
  const [isShortMovie, setSiShortMovie] = React.useState(defaultShortMovie);

  React.useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(foundMoviesState));
  }, [foundMoviesState]);

  React.useEffect(() => {
    api.getMovies()
      .then((res) => setSavedMovies(res))
      .catch((err) => console.log(err))
  }, [isSavedMovies]);


  return (
    <div className="movies">
      <Header
        isLoggedIn={isLoggedIn}
        isVisible={true}
        openSideMenu={openSideMenu} />
      <main className="movies__content">
        <SearchForm
          allMovies={allMovies}
          setResponseMessage={setResponseMessage}
          setFoundMoviesState={setFoundMoviesState}
          setIsNoMovies={setIsNoMovies}
          setIsLoading={setIsLoading}
          setAllMovies={setAllMovies}
          setSiShortMovie={setSiShortMovie}
          isShortMovie={isShortMovie}

        />
        {isLoading ? <Preloader /> :
          !isNoMovies ? <MoviesCardList
            movies={allMovies}
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

export default Movies

