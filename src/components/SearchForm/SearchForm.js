import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSerchMovies }) {
const [searchValue, setSearchValue] = React.useState("");
const [isCheckBox, setIsCheckBox] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        onSerchMovies({ searchValue, isCheckBox });

    }
    function handleChangeSearch(e) {
        setSearchValue(e.target.value);
    }
    function handleChangeCheckBox(e) {
        setIsCheckBox(true);
    }


    return (
        <div className="serch">
            <form className="serch__form"onSubmit={handleSubmit}>
          
                <input className="serch__input" placeholder="Фильм" type="search" required onChange={handleChangeSearch}/>
                <button className="serch__btn" aria-label="Найти" type="submit">Найти</button>
            
                 <FilterCheckbox onclick={handleChangeCheckBox}/>
                         </form>

        </div>
    )
}
export default SearchForm;