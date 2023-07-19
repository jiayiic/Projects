import { useState } from "react"

export function NewForm(props) {

    const [newItem, updateNewItem] = useState("")

    // The function will be called when the form is submitted
    function handleSubmit(event){

        // Prevent the page from reloading over and over again
        event.preventDefault()

        // The case that the user didn't input anything, return nothing
        if (newItem === "") return 

        // Passed the new item to the parent component
        props.addItemE(newItem)

        // updateItems ((currentItems) => {
        //     return [
        //         ...currentItems, { id: crypto.randomUUID(), title: newItem, completed: false},
        //     ]
        // })

        // Clear the input field
        updateNewItem("")
    }

    return (
    <form onSubmit = {handleSubmit} className = "new-item-form">
      <div className = "form-row">
        <label htmlFor = "new-item-input">New Item</label>
        <input 
          value = {newItem} 

          //  The function will be called when the user input anything in the input field 
          onChange = {e => updateNewItem(e.target.value) }
          type = 'text'
          id = 'item'
        />
      </div>
      <button className = "btn">Add</button>
      </form>
    )
}
