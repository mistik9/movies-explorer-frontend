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

} from "../../utils/consts";


function MoviesCardList({ movies, onMovieClick, savedMovies, isSavedMovies }) {
    const { isScreenS, isScreenM, isScreenL, } = useResize();
    const [isCompleted, setIsCompleted] = React.useState(false)
    const [index, setIndex] = React.useState(renderMoviesCards())
    const [addIndex, setAddIndex] = React.useState(addMovieCards())

    // const isSaved = savedMovies

    const initialMovies = movies.slice(0, index)

    function renderMoviesCards() {
        if (isScreenL) {
            return INDEX_SCREEN_L;
        } else if (isScreenM) {
            return INDEX_SCREEN_M;
        } else {
            return INDEX_SCREEN_S;
        }
    }
    function addMovieCards() {
        if (isScreenS) {
            return ADD_INDEX_SCREEN_S;
        } else
            return ADD_INDEX_SCREEN_L;
    }

    const loadMore = () => {
        setAddIndex(addIndex)
        setIndex(index + addIndex)

        if (index >= movies.length) {
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
                        saved={savedMovies.some((savedMovie) => savedMovie.id === movie.id ? true: false)}

                    />
                )}
            </ul>
            {!isCompleted ? (<button className={`card-list__btn ${isSavedMovies ? "card-list__btn_hidden" : ""}`} type="button" onClick={loadMore}>Еще</button>) : ""}
        </section>
    )
}
export default MoviesCardList

