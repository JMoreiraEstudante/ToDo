import { useState } from "react"

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')
    const [done, setDone] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a text')
            return
        }
        onAdd({ text, description, done })
        setDescription('')
        setText('')
        setDone(false)
    }

    return (
        <div className="centered">
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label >Todo</label>
                <input type="text" placeholder="Add Todo" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label >Description</label>
                <textarea placeholder="Add Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <input type="submit" value="ADD"/>
        </form>
        </div>
    )
}

export default AddTodo
