import React, {useState} from 'react'
import './App.css';
import TodoForm from "./TodoForm"
import Todos from "./Todos"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, {
      id: todos.length,
      text: todo,
      isComplete: false
    }])
    console.log(todos)
  }

  const markComplete = (id) => {
    const newTodos = todos.filter((todo, index) => id !== index)
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <div className="app">
        <div className="todo__form">
          <TodoForm addTodo={addTodo} />
        </div>
        <Todos todos={todos} markComplete={markComplete} />
      </div>
    </div>
    
  )
}

export default App;
