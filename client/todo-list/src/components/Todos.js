import Todo from "./Todo"

const Todos = ({todos, onDelete, onDone}) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
              <Todo key={todo._id} todo={todo} onDelete={onDelete} onDone={onDone} />  
            ))}
        </div>
    )
}

export default Todos
