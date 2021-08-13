import Todo from "./Todo"

const Todos = ({todos}) => {
    return (
        <div>
            {todos.map((todo) => (
              <Todo key={todo._id} todo={todo}/>  
            ))}
        </div>
    )
}

export default Todos
