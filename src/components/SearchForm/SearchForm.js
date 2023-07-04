import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSerchMovies }) {
    const [searchValue, setSearchValue] = React.useState("");
    const [checked, setChecked] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setChecked(e.target.checked);
        onSerchMovies({ searchValue, checked });

    }
    function handleChangeSearch(e) {
        setSearchValue(e.target.value);
        


    }
    function handleChangeCheckBox(e) {
          setChecked(e.target.checked) 
        
       
    }


    return (
        <div className="serch">
            <form className="serch__form" onSubmit={handleSubmit}>
                <input className="serch__input" placeholder="Фильм" type="search" required value={searchValue} onChange={handleChangeSearch} />
                <button className="serch__btn" aria-label="Найти" type="submit">Найти</button>
                <FilterCheckbox onChange={handleChangeCheckBox}  value={checked}/>
            </form>

        </div>
    )
}
export default SearchForm;