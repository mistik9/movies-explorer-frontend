import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
    return (
        <div className="serch">
            <form className="serch__form">
          
                <input className="serch__input" placeholder="Фильм" type="search" required />
                <button className="serch__btn" aria-label="Найти" type="submit">Найти</button>
            
                 <FilterCheckbox />
                         </form>

        </div>
    )
}
export default SearchForm;