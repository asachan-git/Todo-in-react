import React, {useState} from 'react'

function TodoForm(props) {
    const {addTodo} = props
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return
        addTodo(value)
        console.log(value)
        setValue('')
    }

    return (
        <div onSubmit={handleSubmit}>
            <h1>Todo List</h1>
            <form>
                <input type="text" value={value} placeholder="Add Todo" onChange={(e) => setValue(e.target.value)}></input>
                <button className="add-todo-button" type="submit">Click</button> 
            </form>
        </div>
    )
}



export default TodoForm
