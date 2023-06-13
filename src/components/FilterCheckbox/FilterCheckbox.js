
import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div
        class="filter-checkbox"
        role="checkbox"
        type="checkbox"
        name="short-film"
        aria-checked="false"
        id="checkbox"
      >
        <label id="checkbox-name">только короткометражки</label>
      </div>
    )
}
export default FilterCheckbox;