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
    SCREEN_S
} from "../../utils/consts";
import { SHORT_MOVIE_DURATION } from "../../utils/consts";




function MoviesCardList({ movies, onMovieClick, savedMovies, isSavedMovies, isShortMovie }) {
    const { width } = useResize();
    const [isCompleted, setIsCompleted] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    const [addIndex, setAddIndex] = React.useState(0)

    if(isShortMovie) movies = movies.filter((movie) => movie.duration < SHORT_MOVIE_DURATION)
    const initialMovies = movies.slice(0, index)

    React.useEffect(() => {
        if (width < SCREEN_S) {
            setIndex(INDEX_SCREEN_S)
            setAddIndex(ADD_INDEX_SCREEN_S)
        } else if (width < SCREEN_L) {
            setIndex(INDEX_SCREEN_M)
            setAddIndex(ADD_INDEX_SCREEN_S)
        } else {
            setIndex(INDEX_SCREEN_L)
            setAddIndex(ADD_INDEX_SCREEN_L)
        }
    }, [width])

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
                        saved={savedMovies.some((savedMovie) => savedMovie.id === movie.id ? true : false)}
                    />
                )}
            </ul>
            {!(index > movies.length) ? (<button className={`card-list__btn ${isSavedMovies ? "card-list__btn_hidden" : ""}`} type="button" onClick={loadMore}>Еще</button>) : ""}
        </section>
    )
}
export default MoviesCardList

