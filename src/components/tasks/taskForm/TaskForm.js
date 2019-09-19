import React, { useState } from 'react';


function TaskForm({setTasks,tasks, history}) {
    const [formValues, setFormValues] = useState({
        id: Date.now(), task: '', completed: false
    })

    function handleChange({target: {name, value}}) {
        setFormValues({...formValues, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormValues(state => ({...state, id: Date.now()}));
        setTasks([...tasks, formValues])
        history.push('/');
        // console.log(formValues);
    }
    return (
        <div>
         <h1>Task Form</h1>
         <form onSubmit={handleSubmit} >
         <label>Task</label>
         <input name='task' value={formValues.task} onChange={handleChange} />
            </form>
        </div>
    )
}

export default TaskForm
