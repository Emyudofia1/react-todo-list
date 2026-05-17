import "./styles.css"

import { useState } from 'react'


export default function App() {
  const [newItem, setnewItem] = useState("");
  const [todos, setTodos] = useState([]);
  // setnewItem("test");
  function handlesubmit(e) {
    e.preventDefault();

    setTodos((cureentTodos) => {
      return [
        ...cureentTodos, 
        { id: crypto.randomUUID(), title: newItem, completed: 
        false}, 
        ] 
    })
  }

  return (
    <>
      <form onSubmit={handlesubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item-name">New Item</label>
          <input value={newItem} onChange={(e) => setnewItem(e.target.value)} type="text" id="item-name"/>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return ( 
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}