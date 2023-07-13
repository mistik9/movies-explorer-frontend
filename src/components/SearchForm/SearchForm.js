import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";



function SearchForm({ allMovies, onSearchMovies, foundMovies }) {

    const defaultSerchText = localStorage.getItem('searchText') ?? '';
    const defaultShortMovie = JSON.parse(localStorage.getItem('isShortMovie')) ?? false;

    const [serchText, setSerchText] = React.useState(defaultSerchText);
    const [isShortMovie, setSiShortMovie] = React.useState(defaultShortMovie);

    React.useEffect(() => {
        if (serchText) localStorage.setItem('searchText', serchText);
        localStorage.setItem('isShortMovie', isShortMovie);
    }, [isShortMovie, serchText]);

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        onSearchMovies(allMovies, isShortMovie, serchText);
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
        setSiShortMovie(e.target.checked)
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
                        minLength="2"
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