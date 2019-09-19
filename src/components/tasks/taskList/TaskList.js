import React from 'react';
import { NavLink } from 'react-router-dom';
import Task from './Task'

function TaskList({tasks, setTasks}) {
    
    return (
        <div>
            <ul>
                {tasks.map(task => <Task key={task.id} task={task} setTasks={setTasks} />)}
            </ul>
        <button>
            <NavLink to='/addtask'>
                Add Task
                </NavLink>
        </button>
        </div>
    )
}

export default TaskList
