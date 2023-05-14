import { useEffect, useState } from 'react'
import './TaskList.css'
import TaskObject from './TaskObject'
const TaskList = ({ receivedTask, getTaskCount, getCompletedCount }) => {

    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        if (receivedTask) {

            setTaskList(
                (prevTaskList) =>
                    [...prevTaskList, { ...receivedTask, id: prevTaskList.length + 1 }]);

        }
    }, [receivedTask]);


    useEffect(() => {
        if (taskList) {
            getTaskCount(taskList.length);
            const completedTask = taskList.filter((task) => task.status !== "Active")
            getCompletedCount(completedTask.length)

        }
    }, [taskList]);

    const removeTask = (id) => {
        const updatedTaskList = [...taskList];
        setTaskList(updatedTaskList.filter((task) => task.id !== id));
    }

    const completeTask = (id) => {
        const updatedTaskList = [...taskList];
        setTaskList(updatedTaskList.
                        map((task) =>
                                {
                                 if(task.id===id)
                                 {
                                     task.status="Completed";
                                 }
                                 return task;
                                }
                            )
                   );
    }

    console.log("Received Task", receivedTask)
    console.log("Task List", taskList)
    return (
        <>
            <div className="task-list-container">
                <h3>Task List</h3>
                {(receivedTask && taskList.length > 0) ? (
                    taskList.map((taskObj) => <TaskObject key={taskObj.id} data={taskObj} removeTask={removeTask} completeTask={completeTask} />)
                ) : (
                    <p>No Tasks Added. Add Tasks</p>
                )}
            </div>
        </>
    );

}

export default TaskList;