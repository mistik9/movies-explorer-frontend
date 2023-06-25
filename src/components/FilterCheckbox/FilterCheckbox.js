
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <p className="checkbox__name">Короткометражки</p>
      <div className="checkbox__image">
        <input  className="checkbox__input" type="checkbox" required/>
      </div>
    </div>
  )
}
export default FilterCheckbox;