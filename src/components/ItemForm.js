import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")

  function handleNameInput(event) {
    setNewItemName(event.target.value);
  }

  function handleCategoryInput(event) {
    setNewItemCategory(event.target.value);
  }

 function createNewItem(e) {
  e.preventDefault();
  const newItem = {
    id: uuid(),
    name: newItemName,
    category: newItemCategory
  }
  onItemFormSubmit(newItem)
  }
  
  
  return (
    <form onSubmit={createNewItem} className="NewItem">
      <label>
        Name:
        <input value={newItemName} onChange={handleNameInput} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={newItemCategory} onChange={handleCategoryInput} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
