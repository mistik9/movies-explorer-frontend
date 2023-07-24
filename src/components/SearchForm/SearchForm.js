import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ allMovies, setResponseMessage, setFoundMoviesState, setIsNoMovies, setIsLoading, isShortMovie, setSiShortMovie, setFoundMovies, isSavedMovies }) {

    const defaultSerchText = !isSavedMovies ? (localStorage.getItem('searchText') || '') : '';
    const [serchText, setSerchText] = React.useState(defaultSerchText);
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    

    React.useEffect(() => {
        if (serchText && !isSavedMovies) {
            localStorage.setItem('searchText', serchText);
            localStorage.setItem('isShortMovie', isShortMovie);
        }
    }, [isShortMovie, serchText]);

    function searchMovies(allMovies, serchText) {
        setIsLoading(true)
        allMovies = allMovies.filter((movie) => movie.nameRU.toLowerCase().includes(serchText.toLowerCase()));
        if (allMovies.length === 0) {
            setIsNoMovies(true);
            setResponseMessage("Ничего не найдено");
        } 
        setFoundMovies(allMovies);
        setFoundMoviesState(allMovies);
        setIsLoading(false);
    }

    function filterCheckbox(checkboxState) {
        setIsLoading(true);
        setSiShortMovie(checkboxState);
        setIsLoading(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchMovies(allMovies, serchText);
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
        filterCheckbox(e.target.checked);
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