
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <>
      <input
        class="filter-checkbox"
        role="checkbox"
        type="checkbox"
        name="short-film"
        aria-checked="false"
        id="checkbox"
      />
      <label id="checkbox-name">только короткометражки</label>
    </>
  )
}
export default FilterCheckbox;