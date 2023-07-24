import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Response from "../Response/Response";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import "./Movies.css";


function Movies({ isLoading, setIsLoading, isLoggedIn, savedMovies, isSavedMovies, openSideMenu, onMovieClick, foundMoviesState, setFoundMoviesState, allMovies, foundMovies, setFoundMovies }) {

  const [responseMessage, setResponseMessage] = React.useState("");
  const [isNoMovies, setIsNoMovies] = React.useState(false);
  const defaultShortMovie = JSON.parse(localStorage.getItem('isShortMovie')) || false;
  const [isShortMovie, setSiShortMovie] = React.useState(defaultShortMovie);
  
  React.useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(foundMoviesState));
  }, [foundMoviesState]);

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
          setSiShortMovie={setSiShortMovie}
          isShortMovie={isShortMovie}
          setFoundMovies={setFoundMovies}
          isSavedMovies={isSavedMovies}
        />
        {isLoading ? <Preloader /> :
          !isNoMovies ? <MoviesCardList
            movies={foundMovies}
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

