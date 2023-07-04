import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import { useResize } from '../../utils/UseResize';
import {
    INDEX_SCREEN_S,
    INDEX_SCREEN_M,
    INDEX_SCREEN_L,
    ADD_INDEX_SCREEN_S,
    ADD_INDEX_SCREEN_M,
    ADD_INDEX_SCREEN_L
} from "../../utils/consts"
    ;
function MoviesCardList({ movies, isSaved, onMovieClick, onMovieSave, handleShowMorePosts, onSavedMovieDelete }) {
    const { width, isScreenS, isScreenM, isScreenL, } = useResize();

    const [isCompleted, setIsCompleted] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    const [addIndex, setAddIndex] = React.useState(0)

    const initialMovies = movies.slice(0, XZ())


    function XZ() {
        if (isScreenL) {
            return INDEX_SCREEN_L;
        } else if (isScreenM) {
            return INDEX_SCREEN_M;
        } else {
            return INDEX_SCREEN_S;
        }
    }
    function ZX() {
        if (INDEX_SCREEN_L) {
            return  ADD_INDEX_SCREEN_L;
        } else if (INDEX_SCREEN_M) {
            return  ADD_INDEX_SCREEN_M;
        } else {
            return  ADD_INDEX_SCREEN_S;
        }
    }
    console.log( )



    const loadMore = () => {
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
                        key={movie.movieId}
                        duration={movie.duration}
                        image={movie.image.url}
                        name={movie.nameRU}
                        movie={movie}
                        trailer={movie.trailerLink}
                        onMovieClick={onMovieClick}
                        onMovieSave={onMovieSave}
                        // onSavedMovieDelete={onSavedMovieDelete}
                        isSaved={isSaved}


                    />

                )}

            </ul>
            {!isCompleted ? (<button className="card-list__btn" type="button" onClick={loadMore}>Еще</button>) : ""}
        </section>
    )
}
export default MoviesCardList

