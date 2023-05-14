const TaskCounter = ({totalTasks,completedTasks}) => {

    return (
        <>
            <div className="task-counter-container">
                <h2> Task Counter </h2>
                <div className="counter-details">
                    <h3>Total:{totalTasks} </h3>
                    <h3>Completed:{completedTasks} </h3>
                </div>

            </div>
        </>

    )


}

export default TaskCounter;