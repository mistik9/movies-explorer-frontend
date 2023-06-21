import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section class="card-list">
            <ul class="card-list__list">
                <li class="card-list__item">
                    <MoviesCard />
                </li>
                <li class="card-list__item">
                    <MoviesCard />
                </li>
                <li class="card-list__item">
                    <MoviesCard />
                </li>
                <li class="card-list__item">
                    <MoviesCard />
                </li>
                <li class="card-list__item">
                    <MoviesCard />
                </li>
                <li class="card-list__item">
                    <MoviesCard />
                </li>
            </ul>
            <button class="card-list__btn" type="button">Еще</button>
        </section>
    )
}
export default MoviesCardList