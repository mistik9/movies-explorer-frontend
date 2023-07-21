import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Response from "../Response/Response";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { SHORT_MOVIE_DURATION } from "../../utils/consts"
import getMovies from "../../utils/MoviesApi";
import "./Movies.css";


function Movies({ isLoggedIn, savedMovies, isSaved, openSideMenu, isVisible, onMovieClick }) {

  const [allMovies, setAllMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");
  const [isNoMovies, setIsNoMovies] = React.useState(false);

  const defaultFoundMovies = JSON.parse(localStorage.getItem('foundMovies')) ?? [];
  const [foundMoviesState, setFoundMoviesState] = React.useState(defaultFoundMovies);


  React.useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(foundMoviesState));
  }, [foundMoviesState]);


  //загрузка всех фильмов
  function getAllMovies() {

    setIsLoading(true)
    getMovies()
      .then((res) => {
        defaultFoundMovies.length > 0 ? setAllMovies(defaultFoundMovies) : setAllMovies(res)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
      getAllMovies()
  }, []);



  function searchMovies(allMovies, isShortMovie, serchText) {
    setIsLoading(true)
    let foundMovies = allMovies;
    foundMovies = foundMovies.filter((movie) => movie.nameRU.toLowerCase().includes(serchText.toLowerCase()));
    if (foundMovies.length === 0) {
      setIsNoMovies(true)
      setResponseMessage("Ничего не найдено")
      setIsNoMovies(true);
    } else if (isShortMovie) {
      foundMovies = foundMovies.filter((movie) => movie.duration < SHORT_MOVIE_DURATION)
    }
    setIsLoading(false);

    setAllMovies(foundMovies);
    setFoundMoviesState(foundMovies);
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
          onSearchMovies={searchMovies}
          foundMovies={foundMoviesState}
        />
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

