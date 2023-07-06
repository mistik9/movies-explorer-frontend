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
    const { width, isScreenS, isScreenM, isScreenL, } = useResize();

    const [isCompleted, setIsCompleted] = React.useState(false)
    const [index, setIndex] = React.useState(renderMoviesCards())
    const [addIndex, setAddIndex] = React.useState(addMovieCards())

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

    function checkIsMovieSaved (movie) {
        return savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)
        
      }

    return (
        <section className="card-list">
            <ul className="card-list__list">

                {initialMovies.map((movie) =>
                    <MoviesCard
                        key={movie.movieId}
                        movie={movie}
                        onClick={onMovieClick}
                        isSaved={checkIsMovieSaved}
                        isSavedMovies={isSavedMovies}
                    />
                )}
            </ul>
            {!isCompleted ? (<button className={`card-list__btn ${isSavedMovies ?"card-list__btn_hidden" :""}`} type="button" onClick={loadMore}>Еще</button>) : ""}
        </section>
    )
}
export default MoviesCardList

