import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import TaskCounter from './Components/TaskCounter'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'

const App = () => {

  const [receivedTask,setReceivedTask] = useState("")

  const getTask = (newTask) =>
  {
    setReceivedTask({...newTask})

  }

  const [totalTasks, setTotalTasks] = useState("")

  const getTaskCount = (total) =>
  {
    setTotalTasks(total);
  }
 const [completedTasks,setCompletedTasks]=useState("");

  const getCompletedCount = (completed) =>
  {
    setCompletedTasks(completed);
  }


 

  return (
    <div className="parent-app-container">

      <div className="count-details">
      <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks}></TaskCounter>
      </div>

      <div className="task-details">
        <Header></Header>
        <TaskForm getTask={getTask}></TaskForm>
        <TaskList receivedTask={receivedTask} getTaskCount={getTaskCount} getCompletedCount={getCompletedCount}></TaskList>
      </div>



    </div>
  )
}

export default App