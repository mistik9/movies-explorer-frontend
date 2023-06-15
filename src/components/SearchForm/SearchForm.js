import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
    return (
        <div class="serch">
            <form class="serch__form">
                <input class="serch__input" placeholder="Фильм" type="search" />
                <button class="serch__btn" aria-label="Найти" type="submit">Найти</button>
                <div class="serch__checkbox">
                    <FilterCheckbox />
                </div>
            </form>

        </div>
    )
}
export default SearchForm;