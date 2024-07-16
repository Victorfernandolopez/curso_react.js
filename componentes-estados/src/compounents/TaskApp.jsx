import { useEffect, useState } from 'react'
import TaskList from './TaskList'
import TaskInput from './TaskInput'



const TaskApp = () => {

    const [tasks, setTasks] = useState([{ id: 1, title: "Task 1" }, { id: 2, title: "Task 2" }])
    useEffect(() => {
        console.log("Tareas", tasks)
    }, [tasks])
    return (
        <div>
            <h1>Task App</h1>
            <TaskList tasks={tasks} />
            <TaskInput tasks={tasks} setTasks={setTasks} />
        </div>
    )
}

export default TaskApp

