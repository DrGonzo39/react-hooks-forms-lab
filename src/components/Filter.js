import React  from "react";

function Filter({ onCategoryChange, onSearchChange, textInput }) {
  
  return (
    <div className="Filter">
     <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={textInput} /> 
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
