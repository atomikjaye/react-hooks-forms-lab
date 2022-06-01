import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('Milk')
  const [category, setCategory] = useState('Produce')

  function handleFormSubmit(e) {
    e.preventDefault()
    // console.log(e)
    onItemFormSubmit({
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category,
    })
    // onItemFormSubmit(newItem)
    // console.log(newItem)
  }

  function handleCategoryOnChange(e) {
    setCategory(e.target.value)
  }
  function handleNameOnChange(e) {
    setName(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameOnChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryOnChange}>
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
