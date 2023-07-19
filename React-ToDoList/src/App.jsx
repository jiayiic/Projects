import { useState} from "react"
import "./styles.css"

function App(){

  // The state that will store new items and update the list
  const [newItem, updateNewItem] = useState("")
  const [items, updateItems] = useState([])


  // The function will be called when the form is submitted
  function handleSubmit(event){
    event.preventDefault()

    updateItems ((currentItems) => {
      return [
        ...currentItems, { id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
  }

  // The function that the user clicks the checkbox
  function toggleToDo(id, completed){

    // Update the items array
    updateItems((currentItems) => {

      // Map through the items array, the loop will return a new array
      const updatedItems = currentItems.map(item =>{

        // The case that the item is the one that the user clicked
        if (item.id === id){
          return { ...item, completed }
        } else {
          return item;
        } 
      });
      return updatedItems;
    });
  }

  // The function that the user clicks the delete button
  function deleteItem(id){
    updateItems((currentItems) => {

      // The case if the user click the item with delete button
      const updatedItems = currentItems.filter(item => item.id !== id)
      return updatedItems;
    })
  }

  return (
  <>
      <form onSubmit = {handleSubmit} className = "new-item-form">
      <div className = "form-row">
        <label htmlFor = "new-item-input">New Item</label>
        <input 
          value = {newItem} 
          onChange = {e => updateNewItem(e.target.value) }
          type = 'text'
          id = 'item'
        />
      </div>
      <button className = "btn">Add</button>
      </form>
      <h1 className = "header">To-Do List</h1>
      <ul className = "list">

        {/* The case that the list is empty */}
        { items.length === 0 && "No to-do item yet!"}

        {items.map((item) => {
          return (

            // Identify each list item with an unique key prop
            <li key = { item.id }>
            <label> 
              <input type = "checkbox" checked = {item.complete} 
              onChange = { e => toggleToDo(item.id, e.target.checked) }  
              />
              { item.title }
            </label>

            {/* The delete button and pass the function */}
            <button onClick = { () => deleteItem(item.id)} className = "btn btn-delete">
              Delete
            </button>
            </li>
          )
        })}
      </ul>
  </>

  )
}

export default App;