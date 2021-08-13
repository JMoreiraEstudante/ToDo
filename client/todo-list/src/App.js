import { useState, useEffect } from "react"

import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos()
      setTodos(todosFromServer)
    }

    getTodos()
  }, [])

  //get todos
  const fetchTodos = async () => {
    const res = await fetch('http://localhost:3001/todos')
    const data = await res.json()
    return data
  }

  //fetch one todo
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:3001/todo/${id}`)
    const data = await res.json()
    return data
  }

  //post todos
  const addTodo = async (todo) => {
    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    const data = await res.json()
    setTodos([...todos, data])
  }

  //Delete Todo
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3001/todo/${id}`, {
      method: 'DELETE'
    })
    setTodos(todos.filter((todo) => todo._id !== id))
  }

  //mark as done
  const toggleDone = async (id) => {
    const todoToToggle = await fetchTodo(id)
    const updTodo = {...todoToToggle, done: !todoToToggle.done}
    const res = await fetch(`http://localhost:3001/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTodo)
    })
    const data = await res.json()
    setTodos(todos.map((todo) => todo._id === id ? {...todo, done: data.done} : todo))
  }

  return (
    <div className="container">
      {todos.length > 0 ?<Todos todos={todos} onDelete={deleteTodo} onDone={toggleDone}/> : 'No todos to show'}
      <AddTodo onAdd={addTodo}/>
    </div>
  );
}

export default App;
