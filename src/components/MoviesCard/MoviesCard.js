import "./MoviesCard.css";
import { MAIN_API_URL } from "../../utils/consts";
import { MOVIE_URL } from "../../utils/consts"


function MoviesCard({ movie, isSaved, onClick, isSavedMovies }) {

  function formatedDuration(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  };

  function handleClick() {
    onClick(movie);
  }


  return (
    <li className="movies-card">
      <h3 className="movies-card__title">{movie.nameRU}</h3>
      <button className={`movies-card__save-btn ${isSaved ? "movies-card__save-btn_active" : ""}`} type="button" onClick={handleClick} isSaved={isSaved}></button>
      <p className="movies-card__duration">{formatedDuration(movie.duration)}</p>
      <img className="movies-card__img" src={isSavedMovies ? movie.image : `${MOVIE_URL}${movie.image.url}`} alt="Постер к фильму" ></img>

    </li>

  )
}
export default MoviesCard
