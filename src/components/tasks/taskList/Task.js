import React from 'react'

function Task({ task }) {
   
    return (
      
          <li><del>{task.task}</del></li>  
        
    )
}

export default Task;
