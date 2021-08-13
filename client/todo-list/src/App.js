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

  /*//fetch one todo
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:3001/todo/${id}`)
    const data = await res.json()
    return data
  }*/

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

  return (
    <div className="container">
      {todos.length > 0 ?<Todos todos={todos}/> : 'No todos to show'}
      <AddTodo onAdd={addTodo}/>
    </div>
  );
}

export default App;
