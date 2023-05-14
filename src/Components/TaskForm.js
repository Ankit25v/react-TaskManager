import { useState } from 'react';
import './TaskForm.css'
const TaskForm = ({getTask}) => {

    const [inputText, setInputText] = useState({task:"",status:""})

    const handleChange=(e) =>
    {

        setInputText({...inputText,
            task:e.target.value,
            status:"Active"
         })
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(inputText);
        getTask(inputText);

    }

    return (
        <>
            <div className="task-form-container"><h3>Task Form</h3>
                <form className="taskForm">

                    <input name="Task Name" onChange={handleChange} value={inputText.task} />
                    <button onClick={handleSubmit}>Add Task</button>

                </form>
            </div>
        </>)

}

export default TaskForm;