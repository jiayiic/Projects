import { useState } from "react";
import { NewForm } from "./NewForm";
import { ToDoList } from "./ToDoList";
import "./styles.css";

function App() {
  // The state that will store new items and update the list
  const [items, updateItems] = useState([]);

  //  The function that the user clicks the add button
  function addItem(title) {
    updateItems((currentItems) => {
      return [
        ...currentItems,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // The function that the user clicks the checkbox
  function toggleItem(id, completed) {
    // Update the items array
    updateItems((currentItems) => {
      // Map through the items array, the loop will return a new array
      const updatedItems = currentItems.map((item) => {
        // The case that the item is the one that the user clicked
        if (item.id === id) {
          return { ...item, completed };
        } else {
          return item;
        }
      });
      return updatedItems;
    });
  }

  // The function that the user clicks the delete button
  function deleteItem(id) {
    updateItems((currentItems) => {
      // The case if the user click the item with delete button
      const updatedItems = currentItems.filter((item) => item.id !== id);
      return updatedItems;
    });
  }

  return (
    <>
      <NewForm addItemE={addItem} />
      <h1 className="header">To-Do List</h1>
      <ToDoList items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
    </>
  );
}

export default App;
