import "./MoviesCard.css";
import Pic from "../../images/pic.png"

function MoviesCard() {
    return (
                  <div class="movies-card">
                <h3 class="movies-card__title">33 слова о дизайне</h3>
                <button class="movies-card__save-btn" type="button"></button>
                <p class="movies-card__duration">1ч 47м</p>
                <img class="movies-card__img" src ={Pic} alt="Постер к фильму"></img>
            </div>
       
    )
}
export default MoviesCard