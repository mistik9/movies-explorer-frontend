import React from "react";
import "./FilterCheckbox.css";


function FilterCheckbox({ onChange, isShortMovie}) {

  return (
    <div className="checkbox">
      <p className="checkbox__name">Короткометражки</p>
          <div className={`checkbox__image ${isShortMovie ? "" : "checkbox__image_unactive"}`} >
      <input  className="checkbox__input" name="short-movies" type="checkbox" onClick={onChange} value={isShortMovie}/>
      </div>
    </div>
  )
}
export default FilterCheckbox;

