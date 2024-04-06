import React, { useState } from 'react'

const ToDoItems = (props) => {

    const {tasks, handleDelete, handleEdit} = props;
    const [editText, setEditText] = useState("");
    const [editId, setEditId] = useState(null);

    const handleEditText = (id, text) => {
      setEditId(id);
      setEditText(text);
      //handleEdit(editId, editText);
    }

    const handleEditChange = (event) => {
      setEditText(event.target.value)
    }

  return (

    <ol>
            {tasks.map(function(element, index){
                return <div key={index}>
                {
                  editId === element.id ?
                  <>
                    <input type='text' value={editText} onChange={handleEditChange}/>
                    <button type='submit' onClick={() => {
                        handleEdit(editId, editText);
                        setEditId(null);
                        setEditText("");
                    }}>save</button>
                  </>
                  :
                  <>
                    <li key={element.id}> {element.title} </li>
                    <button onClick={() => handleDelete(element.id)}>Delete</button>
                    <button onClick={() => handleEditText(element.id, element.title)}>Edit</button>
                  </>

                }
                </div>
            })}
    </ol>
  )
}

export default ToDoItems