const Todo = ({todo}) => {
    return (
        <div>
            <h3>{todo.text}</h3>
            <p>{todo.description}</p>
        </div>
    )
}

export default Todo
