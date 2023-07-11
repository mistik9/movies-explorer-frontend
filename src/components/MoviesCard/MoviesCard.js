import "./MoviesCard.css";
import Pic from "../../images/pic.png"

function MoviesCard() {
    return (
                  <div className="movies-card">
                <h3 className="movies-card__title">33 слова о дизайне</h3>
                <button className="movies-card__save-btn" type="button"></button>
                <p className="movies-card__duration">1ч 47м</p>
                <img className="movies-card__img" src ={Pic} alt="Постер к фильму"></img>
            </div>
       
    )
}
export default MoviesCard