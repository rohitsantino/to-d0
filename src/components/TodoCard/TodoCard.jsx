import React, { useEffect, useState } from 'react'
import { axios } from '@Axios';

export default function TodoCard({ todo, updatedTodoObj, deletedTodoId }) {
    const [updatedTodo, setUpdatedTodo] = useState("");
    const handleDelete = (todoID) => {
        deletedTodoId(todoID);
        axios.delete(`/api/v1/to-do/${todoID}`);
    }
    useEffect(() => {
        setUpdatedTodo(todo.todo);
    }, [])

    const handleChange = (e) => {
        setUpdatedTodo(e.target.value);
    }

    const handleUpdation = (todo) => {
        updatedTodoObj(todo);
        axios.put(`/api/v1/to-do/${todo.id}`, {
            todo: updatedTodo
        })
    }
    return (
        <div className='todo-container' >
            <div className="todo-name">
                {todo.todo}
            </div>
            <div className="todo-buttons">
                <button className='update'>Update</button>
                <button className='delete' onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
            <div className="updation-form">
                <input type="text" value={updatedTodo} onChange={handleChange} />
                <button onClick={() => handleUpdation(todo)}>Submit</button>
            </div>
        </div>
    )
}
