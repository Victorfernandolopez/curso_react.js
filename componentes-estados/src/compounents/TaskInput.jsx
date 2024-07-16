import { useState } from 'react'

const TaskInput = ({ tasks, setTasks }) => {

    const [input, setInput] = useState("")

    const addTask = () => {
        setTasks([...tasks, { title: input }])
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={addTask}>ADD</button>
        </div>
    )
}

export default TaskInput
