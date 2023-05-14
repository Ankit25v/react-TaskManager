
import './TaskObject.css'
const TaskObject = ({ data,removeTask,completeTask }) => {
  console.log("Data", data)
  const handleDeletion = () => {
    removeTask(data.id)
  }

  const handleCompletion = () => {
    completeTask(data.id);
  }

  return (<>
    <div className="task-object-details">
      <h3>{data.task}</h3>
      <button onClick={handleDeletion}>❎</button>
       {data.status==="Active"?<button onClick={handleCompletion}>✅</button>:<p>Completed</p>}
    </div>
  </>)
}

export default TaskObject;