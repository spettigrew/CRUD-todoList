import React from 'react';
import { NavLink } from 'react-router-dom';
import Task from './Task'

function TaskList({tasks}) {
    
    return (
        <div>
            {tasks.map(task => <Task key={task.id} task={task} />)}
        <button>
            <NavLink to='/addtask'>
                Add Task
                </NavLink>
        </button>
        </div>
    )
}

export default TaskList
