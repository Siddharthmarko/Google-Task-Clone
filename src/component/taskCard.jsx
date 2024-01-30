import React from "react"

export default function TaskCard({data}){
    // object of list jisme task hai
    let completeTask = [];
    let nonCompleteTask = [];

    data.task.map((item) => {
        if(item.complete) {
            completeTask.push((item));
        } else {
            nonCompleteTask.push(item);
        }
    })

    return (
        <div className="task-card" >
            <div className="card-heading" >
                <h2>Task Name</h2>  
                {/* <div className="dots" >
                    <i>...</i>
                    <div >
                        <div>
                        <div>Sort by</div>
                        <div>My order</div>
                        <div>Date</div>
                    </div>
                    <div>
                        <div>Rename List</div>
                        <div>Delete list</div>
                    </div>
                    <div>
                    <div>Delete all complete task</div>
                        
                    </div>
                    </div>
                </div> */}
            </div>
            <div className="content-area" >
                <h3>Add Task</h3>
                <div>
                    {nonCompleteTask}
                </div>
                <h4>Complete task</h4>
                <div>
                    {completeTask}
                </div>
                
            </div>
        </div>
    )
}