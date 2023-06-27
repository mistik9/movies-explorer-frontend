import "./MoviesCard.css";
import { MAIN_API_URL } from "../../utils/consts";


function MoviesCard({ nameRU, duration, image }) {
    return (
                  <div className="movies-card">
                <h3 className="movies-card__title">{nameRU}</h3>
                <button className="movies-card__save-btn" type="button"></button>
                <p className="movies-card__duration">{duration}</p>
                <img className="movies-card__img" src ={image} alt="Постер к фильму"></img>
            </div>
       
    )
}
export default MoviesCard
