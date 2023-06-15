import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section class="movies">
            <ul class="movies__container">
                <li class="movies__item">
                    <MoviesCard />
                </li>
                <li class="movies__item">
                    <MoviesCard />
                </li>
                <li class="movies__item">
                    <MoviesCard />
                </li>
                <li class="movies__item">
                    <MoviesCard />
                </li>
                <li class="movies__item">
                    <MoviesCard />
                </li>
                <li class="movies__item">
                    <MoviesCard />
                </li>
            </ul>
            <button class="movies__btn" type="button">Еще</button>
        </section>
    )
}
export default MoviesCardList