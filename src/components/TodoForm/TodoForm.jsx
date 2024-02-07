import React, { useState } from 'react'
import { axios } from "@Axios";

export default function TodoForm() {
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/v1/to-do`, {
      todo: todo
    }).then(() => window.location.reload());
    setTodo("");
  }
  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo:</label>
        <input
          type="text"
          id="todo"
          name="todo"
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>

  )
}
