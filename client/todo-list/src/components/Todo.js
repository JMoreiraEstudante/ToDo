import {FaTimesCircle} from 'react-icons/fa'

const Todo = ({todo, onDelete, onDone}) => {
    return (
        <div className={todo.done ? "todo done" : "todo notdone"} onDoubleClick={() => onDone(todo._id)}>
            <div className="top">
            <h3>{todo.text}</h3>
            <FaTimesCircle size={21}style={{color:'#b00e09', cursor: 'pointer'}} onClick={() => onDelete(todo._id)}/>
            </div>
            <p>{todo.description}</p>
        </div>
    )
}

export default Todo
