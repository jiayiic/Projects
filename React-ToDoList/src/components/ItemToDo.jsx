import React from 'react';

export function ItemToDo({id, title, completed, toggleItem, deleteItem}) {
    return (
        <li>
            <label> 
            <input type = "checkbox" checked = {completed} 
            onChange = { e => toggleItem(id, e.target.checked) }  
            />
            { title }
            </label>

            {/* The delete button and pass the function */}
            <button onClick = { 
                () => deleteItem(id)} className = "btn btn-delete">
                Delete
            </button>
        </li>

    )
}