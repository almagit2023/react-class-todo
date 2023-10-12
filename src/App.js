import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  function createItems(e) {
    e.preventDefault()
    let obj = {
      id: new Date().getTime(),
      value: value
    }

    setTodo([...todo].concat(obj))
    setValue("")
  }

  function handleDelete(index) {
    const newTodo = [...todo].filter((item) => item.id !== index)
    setTodo(newTodo)
    console.log(index)
  }

  function editTodo(index) {

    const updatedList = [...todo].map((items) => {
      if (items.id === index) {
        items.value = editingText
      }
      return items
    })
    setTodo(updatedList)
    setTodoEditing(null)
    setEditingText("")
  }

  return (
    <>
      <div className="App">
        <h1>React TODO APP Using Functional Component</h1>
      </div>
      <div className='parentForm'>
        <form action="" className="formStyle" onSubmit={createItems}>
          <label htmlFor="">Create Items</label><br /><br />
          <input type="text" name="" id="" onChange={(e) => setValue(e.target.value)} value={value} /><br /><br />
          <input type="submit" value="CREATE" className='btnCreate' />
        </form>
      </div>
      {todo.map((item, index) => {
        return <li key={index} className='itemStyle'>
          {todoEditing === item.id ? (<input type='text' onChange={(e) => setEditingText(e.target.value)} value={editingText} />) : (<div> {item.value}</div>)}
          <button onClick={()=> handleDelete(item.id)}>Delete</button>
          {todoEditing === item.id ? (<button className='btnStyleEdit' onClick={() => editTodo(item.id)}>Edit</button>) : (<button onClick={() => setTodoEditing(item.id)}>Edit</button>)}
        </li>
      })}
    </>
  );
}

export default App;
