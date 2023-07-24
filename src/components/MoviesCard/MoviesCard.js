import "./MoviesCard.css";
import { MOVIE_URL } from "../../utils/consts";

function MoviesCard({ movie, saved, onClick, isSavedMovies }) {

  function formatedDuration(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  };

  function handleClick() {
    onClick(movie);
  }

  //console.log({duration: movie.duration, SHORT_MOVIE_DURATION}, movie.duration < SHORT_MOVIE_DURATION)
  
  return (
      <li className="movies-card">
      <h3 className="movies-card__title">{movie.nameRU}</h3>
      {isSavedMovies ? (<button className="movies-card__del-btn" type="button" onClick={handleClick} ></button>) :
        (<button className={`movies-card__save-btn ${saved ? "movies-card__save-btn_active" : ""}`} type="button" onClick={handleClick} ></button>)
      }
      <p className="movies-card__duration">{formatedDuration(movie.duration)}</p>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
      <img className="movies-card__img" src={isSavedMovies ? movie.image : `${MOVIE_URL}${movie.image.url}`} alt="Постер к фильму" ></img>
      </a>
    </li>
  )
}

export default MoviesCard
