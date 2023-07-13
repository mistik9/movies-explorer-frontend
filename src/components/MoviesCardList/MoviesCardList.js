import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import { useResize } from '../../utils/UseResize';
import {
    INDEX_SCREEN_S,
    INDEX_SCREEN_M,
    INDEX_SCREEN_L,
    ADD_INDEX_SCREEN_S,
    ADD_INDEX_SCREEN_L,
    SCREEN_L,
    SCREEN_M,
    SCREEN_S

} from "../../utils/consts";


function MoviesCardList({ movies, onMovieClick, savedMovies, isSavedMovies }) {
    const { width, isScreenS, isScreenM, isScreenL, } = useResize();
    const [isCompleted, setIsCompleted] = React.useState(false)
    const [index, setIndex] = React.useState(renderMoviesCards())
    const [addIndex, setAddIndex] = React.useState(addMovieCards())

    // const isSaved = savedMovies

    const initialMovies = movies.slice(0, index)


    function renderMoviesCards() {
        if (width >= SCREEN_L) {
            return INDEX_SCREEN_L;
        } else if (width > SCREEN_M && width < SCREEN_L) {
            return INDEX_SCREEN_M;
        } else {
            return INDEX_SCREEN_S;
        }
    }
    function addMovieCards() {
        if (width > SCREEN_S && width < SCREEN_L) {
            return ADD_INDEX_SCREEN_S;
        } else if (width > SCREEN_L)
            return ADD_INDEX_SCREEN_L;
    }

    const loadMore = () => {
        setAddIndex(addIndex)
        setIndex(index + addIndex)


        if (index.Number > movies.length) {
            setIsCompleted(true)
        } else {
            setIsCompleted(false)

        }
    }

    return (
        <section className="card-list">
            <ul className="card-list__list">

                {initialMovies.map((movie) =>
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                        onClick={onMovieClick}
                        isSavedMovies={isSavedMovies}
                        savedMovies={savedMovies}
                        saved={savedMovies.some((savedMovie) => savedMovie.id === movie.id ? true : false)}

                    />
                )}
            </ul>
            {!(index > movies.length) ? (<button className={`card-list__btn ${isSavedMovies ? "card-list__btn_hidden" : ""}`} type="button" onClick={loadMore}>Еще</button>) : ""}
        </section>
    )
}
export default MoviesCardList

