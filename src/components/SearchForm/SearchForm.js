import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { SHORT_MOVIE_DURATION } from "../../utils/consts"

function SearchForm({ allMovies, setAllMovies, setResponseMessage, setFoundMoviesState, setIsNoMovies, setIsLoading }) {
    const defaultSerchText = localStorage.getItem('searchText') ?? '';
    const defaultShortMovie = JSON.parse(localStorage.getItem('isShortMovie')) ?? false;
    const [serchText, setSerchText] = React.useState(defaultSerchText);
    const [isShortMovie, setSiShortMovie] = React.useState(defaultShortMovie);
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
        if (serchText) {
            localStorage.setItem('searchText', serchText);
            localStorage.setItem('isShortMovie', isShortMovie);
        }
    }, [isShortMovie, serchText]);

    function searchMovies(allMovies, isShortMovie, serchText) {
        setIsLoading(true)
        allMovies = allMovies.filter((movie) => movie.nameRU.toLowerCase().includes(serchText.toLowerCase()));

        if (allMovies.length === 0) {
            setIsNoMovies(true)
            setResponseMessage("Ничего не найдено")
            setIsNoMovies(true);
        } else if (isShortMovie) {
            allMovies = allMovies.filter((movie) => movie.duration < SHORT_MOVIE_DURATION);
        }
        setIsLoading(false);
        setAllMovies(allMovies);
        setFoundMoviesState(allMovies);
    }

    function filterCheckbox(allMovies, checkboxState) {
        setIsLoading(true)
        if (checkboxState) allMovies = allMovies.filter((movie) => movie.duration < SHORT_MOVIE_DURATION);
        setIsLoading(false);
        setAllMovies(allMovies);
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchMovies(allMovies, isShortMovie, serchText);
    }

    function handleChangeSearch(event) {
        const { target } = event;
        const { name } = target;
        const { value } = target;
        setSerchText(event.target.value);
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
    }

    function handleChangeCheckBox(e) {
        const checkboxState = e.target.checked;
        filterCheckbox(allMovies, checkboxState);
        setSiShortMovie(checkboxState);
    }

    return (
        <div className="serch">
            <form className="serch__form" onSubmit={handleSubmit} >
                <label className="serch__input-label">
                    <input className="serch__input"
                        placeholder="Фильм"
                        type="search"
                        id="search"
                        name="search"
                        required
                        minLength="1"
                        maxLength="200"
                        value={serchText}
                        onChange={handleChangeSearch} />
                    <span id="error" className="serch__error">{errors.search}</span>
                </label>
                <button className="serch__btn" aria-label="Найти" type="submit" disabled={!isValid}>Найти</button>
                <FilterCheckbox onChange={handleChangeCheckBox} isShortMovie={isShortMovie} />
            </form>

        </div>
    )
}
export default SearchForm;