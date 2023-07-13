import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";


function SearchForm({ allMovies, onSearchMovies, foundMovies }) {

    const defaultSerchText = localStorage.getItem('searchText') ?? '';
    const defaultShortMovie = JSON.parse(localStorage.getItem('isShortMovie')) ?? false;
    
    const [serchText, setSerchText] = React.useState(defaultSerchText);
    const [isShortMovie, setSiShortMovie] = React.useState(defaultShortMovie);
        
    React.useEffect(() => {
        if(serchText) localStorage.setItem('searchText', serchText);
        localStorage.setItem('isShortMovie', isShortMovie);
    }, [ isShortMovie, serchText]);


    function handleSubmit(e) {
        e.preventDefault();
        onSearchMovies(allMovies, isShortMovie, serchText);
    }

    function handleChangeSearch(e) {
        setSerchText(e.target.value);
    }

    function handleChangeCheckBox(e) {
        setSiShortMovie(e.target.checked)

    }

    return (
        <div className="serch">
            <form className="serch__form" onSubmit={handleSubmit}>
                <input className="serch__input"
                    placeholder="Фильм"
                    type="search"
                    required
                    minLength="2"
                    maxLength="200"
                    value={serchText}
                    onChange={handleChangeSearch} />
                <button className="serch__btn" aria-label="Найти" type="submit">Найти</button>
                <FilterCheckbox onChange={handleChangeCheckBox} isShortMovie={isShortMovie} />
            </form>

        </div>
    )
}
export default SearchForm;