import React from "react";
import { ItemToDo } from "./ItemToDo";

export function ToDoList({ items, toggleItem, deleteItem }) {
  return (
    <ul className="list">
      {/* The case that the list is empty */}
      {items.length === 0 && "No to-do item yet!"}

      {items.map((item) => {
        return (
          // Pass the props to the child component
          <ItemToDo
            id={item.id}
            title={item.title}
            completed={item.completed}
            // {...item}
            key={item.id}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
}
