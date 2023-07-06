import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({allMovies, onSerchMovies }) {
    const [serchText, setSerchText] = React.useState([]);
    const [isShortMovie, setSiShortMovie] = React.useState(false);

    
    function handleSubmit(e) {
        e.preventDefault();
        onSerchMovies({allMovies, isShortMovie, serchText});

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
                <input className="serch__input" placeholder="Фильм" type="search" required value={serchText} onChange={handleChangeSearch} />
                <button className="serch__btn" aria-label="Найти" type="submit">Найти</button>
                <FilterCheckbox onChange={handleChangeCheckBox} isShortMovie={isShortMovie}/>
            </form>

        </div>
    )
}
export default SearchForm;