import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";



function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [listItems, setListItems] = useState(items)

  function onItemFormSubmit(addItem) {
    setListItems(() => [
      ...listItems,
      addItem
    ])
    console.log("List Items in ONITEMSUBMIT", addItem)

  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const itemsToDisplay = listItems
    .filter((item) => {
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        // console.log("IN IF STATE", search, item)
        return item
      } else {
        // console.log("In Else", search)
        return null
      }
    })
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter category={selectedCategory} onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
