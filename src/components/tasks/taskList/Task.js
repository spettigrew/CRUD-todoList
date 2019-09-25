import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

function Task({ task, toggle }) {
    console.log(toggle)

    return (
      <Fragment>
          <li onClick={() => toggle(task.id)}>
            {task.completed ? <del>{`${task.task}`}</del> : `${task.task}`}
          </li>  
            <button>
             <NavLink to={`/edittask/${task.id}`}>
             Edit
             </NavLink>
             </button>
        </Fragment>
    )
}

export default Task;
