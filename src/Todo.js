import React from 'react'
import "./Todo.css";

function Todo({todo, markComplete}) {

    return (
        <div className="todo">
            <input type="checkbox" checked={todo.isComplete} id={todo.id} value={todo.text} onChange={() => markComplete(todo.id)} />
            <label htmlFor={todo.id} >{todo.text}</label>
        </div>
    )
}

export default Todo