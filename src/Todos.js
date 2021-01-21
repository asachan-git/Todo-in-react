import React from 'react'
import Todo from "./Todo"

function Todos({todos, markComplete}) {

    console.log(todos)

    return (
        <div>
            {
                todos.map((todo, index) =>  (
                    <Todo key={index} todo={todo} markComplete={markComplete}/>
                ))
            }
        </div>
    );
}


export default Todos
