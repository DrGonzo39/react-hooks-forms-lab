import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [textInput, setTextInput] = useState("")
    
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleTextChange(event) {
    setTextInput(event.target.value);
  }

  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const textSearch = itemsToDisplay.filter((item) => {
    if(textInput === "") return true;

    return item.name === textInput;
  })
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter  onSearchChange={handleTextChange} onCategoryChange={handleCategoryChange}  textInput={textInput} />
      <ul className="Items">
        {textSearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
