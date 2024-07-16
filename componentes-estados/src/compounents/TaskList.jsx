import React from 'react'

const TaskList = ({ tasks }) => {
    return (

        <ul>
            {tasks.map((task, index) => {
                return <li key={index}>{task.title}</li>
            })}
        </ul>

    )
}

export default TaskList
