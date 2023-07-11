import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Response from "../Response/Response";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import getMovies from "../../utils/MoviesApi";
import "./Movies.css";


function Movies({ isLoggedIn, savedMovies, isSaved, openSideMenu, isVisible, onMovieClick }) {
  const [allMovies, setAllMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");
  const [isNoMovies, setIsNoMovies] = React.useState(false);

  //загрузка всех фильмов
  React.useEffect(() => {
    if (isLoggedIn) {
    setIsLoading(true)
    getMovies()
      .then((res) => {
        setAllMovies(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
    }
  }, [isLoggedIn])

  function searchMovies(allMovies, isShortMovie, serchText) {
    setIsLoading(true)
    let foundMovies = allMovies;
    foundMovies = foundMovies.filter((movie) => movie.nameRU.toLowerCase().includes(serchText.toLowerCase()));
    if (foundMovies.length === 0) {
      setIsNoMovies(true)
      setResponseMessage("Ничего не найдено")
      setIsNoMovies(true);
    } else if (isShortMovie) {
      foundMovies = foundMovies.filter((movie) => movie.duration < 40)
    }
    setIsLoading(false);
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
          onSearchMovies={searchMovies} />
        {isLoading ? <Preloader /> :
          !isNoMovies ? <MoviesCardList
            movies={allMovies}
            savedMovies={savedMovies}
            onMovieClick={onMovieClick}
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

