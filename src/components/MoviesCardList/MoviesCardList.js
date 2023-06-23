import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section className="card-list">
            <ul className="card-list__list">
                <li className="card-list__item">
                    <MoviesCard />
                </li>
                <li className="card-list__item">
                    <MoviesCard />
                </li>
                <li className="card-list__item">
                    <MoviesCard />
                </li>
                <li className="card-list__item">
                    <MoviesCard />
                </li>
                <li className="card-list__item">
                    <MoviesCard />
                </li>
                <li className="card-list__item">
                    <MoviesCard />
                </li>
            </ul>
            <button className="card-list__btn" type="button">Еще</button>
        </section>
    )
}
export default MoviesCardList