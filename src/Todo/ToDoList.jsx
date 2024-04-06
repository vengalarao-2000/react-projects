import React, { useState } from 'react'
import ToDoItems from './ToDoItems';

const ToDoList = () => {

    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
  
    const handleChange = (event) => {
      setText(event.target.value);
    }
  
    const handleSubmit = () => {
      let itemObject = {
        title: text,
        id: new Date().getTime(),
      }
      setTasks([...tasks, itemObject]);
      setText("");
    }

    const handleDelete = (id) => {
      let filteredTasks = tasks.filter((element) => {
        return element.id !== id;
      })
      // console.log(filteredTasks);
      setTasks([...filteredTasks]);
    };


    const handleEdit = (id, newText) => {
      const updatedList = tasks.map((element) => {
        if(element.id === id) {
          return {...element, title: newText}
        }
        else{
          return element
        }
      });
      //console.log(updatedList);
      setTasks(updatedList);
    }


  return (
    <>
        <input type='text' value={text} onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
        <ToDoItems tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit}/>
  </>
  )
}

export default ToDoList