import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <div class="movies">
            <ul class="movies__list">
                <li>
<MoviesCard />
                </li>
                

            </ul>
        </div>
    )
}
export default MoviesCardList