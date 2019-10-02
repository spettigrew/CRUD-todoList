import React from 'react';
import { NavLink } from 'react-router-dom';
import Task from './Task'

function TaskList(props) {
    console.log(props)
    
    return (
        <div>
            <ul>
    {props.tasks.map(task => <Task key={task.id} task={task} toggle={props.toggle} />)}
            </ul>
        <button>
            <NavLink to='/addtask'>
                Add Task
                </NavLink>
        </button>
        <button onClick={props.delete}>
            Delete Task
        </button>
        </div>
    )
}

export default TaskList