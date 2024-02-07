import React, { useEffect, useState } from 'react';
import { axios } from "@Axios";
import { TodoCard } from '../TodoCard';

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const loadTodos = async () => {
        try {
           await axios.get(`/api/v1/to-do`).then(res => setTodos(res.data));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadTodos();
    }, [])

    const handleUpdation = (task) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === task.id) {
                return { ...task };
            }
            return todo;
        });
        setTodos([...updatedTodos]);
    };
    const handleDeletion = (todoID) => {
        const filteredTodos = todos.filter(todo => todo.id != todoID);
        setTodos([...filteredTodos]);
    };
    return (
        <div className='todos-container'>
            {todos.map(todo => (
                <TodoCard todo={todo} key={todo.id} updatedTodoObj={handleUpdation} deletedTodoId={handleDeletion} />
            ))}
        </div>
    )
}
