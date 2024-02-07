import React, { useEffect, useState } from 'react'
import { axios } from '@Axios';

export default function TodoCard({ todo, updatedTodoObj, deletedTodoId }) {
    const [updatedTodo, setUpdatedTodo] = useState("");
    const [hasUpdation, setHasUpdation] = useState(false);

    const handleDelete = (todoID) => {
        deletedTodoId(todoID);
        axios.delete(`/api/v1/to-do/${todoID}`);
    }

    const handleUpdate = () => setHasUpdation((prevUpdatedBool) => !prevUpdatedBool);

    useEffect(() => {
        setUpdatedTodo(todo.todo);
    }, [])

    const handleChange = (e) => {
        setUpdatedTodo(e.target.value);
    }

    const handleUpdation = () => {
        const updatedTodoTask = {
            id: todo.id,
            todo: updatedTodo
        };
        updatedTodoObj(updatedTodoTask);
        axios.put(`/api/v1/to-do/${todo.id}`, {
            todo: updatedTodo
        });
        setHasUpdation(false);
    }

    return (
        <div className='todo-container' >
            <div className="todo-name">
                {todo.todo}
            </div>
            <div className="todo-buttons">
                <button className='update' onClick={handleUpdate}>Update</button>
                <button className='delete' onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
            {hasUpdation ? <div className="updation-form">
                <input type="text" value={updatedTodo} onChange={handleChange} />
                <button onClick={handleUpdation}>Submit</button>
            </div> : null}
        </div>
    )
}
