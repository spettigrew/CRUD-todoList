import React, { useState, useEffect } from 'react';


function TaskForm({setTasks,tasks, history, edit, match: {params: {id}} }) {
    const [formValues, setFormValues] = useState({
        id: Date.now(), 
        task: '', 
        completed: false
    })

    useEffect(() => {
        if (edit) {
            const editTask = tasks.filter(task => task.id.toString() === id)[0]
            setFormValues(editTask);
        }
    }, [])

    function handleChange({target: { name, value } }) {
        setFormValues({...formValues, [name]: value});
    }

    function updateTask(taskId) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                console.log(`Found${taskId}`)
                return formValues
            } else {
                console.log(`Not found`)
                return task;
            }
        })
        setTasks(updatedTasks)
    }

    function addTask() {
        setFormValues(state => ({ ...state, id: Date.now() }));
        setTasks([...tasks, formValues])
    }

    function handleSubmit(e) {
        e.preventDefault();
        edit ? updateTask(formValues.id) : addTask()
        history.push('/');
        // console.log(formValues);
    }
// ? === if, : === then, () at the end of the function, invokes (or calls) the function.
    function handleCancel(){
      history.push('/');
    }

    return (
        <div>
         <h1>Task Form</h1>
         <form onSubmit={handleSubmit} >
         <label>Task</label>
         <input name='task' value={formValues.task} onChange={handleChange} />
         <button type='submit'>Submit</button>
         <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default TaskForm
