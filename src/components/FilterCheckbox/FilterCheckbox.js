import React from "react";
import "./FilterCheckbox.css";


function FilterCheckbox({ onChange, checked}) {


  return (
    <div className="checkbox">
      <p className="checkbox__name">Короткометражки</p>
      <div className={`checkbox__image ${checked ? "": "checkbox__image_unactive"}`}>
        <input  className="checkbox__input" name="short-movies" type="checkbox" value={checked} onChange={onChange}/>
      </div>
    </div>
  )
}
export default FilterCheckbox;

