import React from "react"
import TaskCard from "./taskCard"

const options = [
    "Sort by date",
    "Sort by My order",
    "Rename List",
    "Delete List",
    "Delete all complete tasks"
];
export default function CheckedList({ data }) {


    const dataInList = data.task.map((item) => {
        return <TaskCard key={item.id} data={item} />
    })
    
    return (
        <div className="card" id="style-3">
            <div className="head">
                <div>
                    <h1>{data.name}</h1>
                </div>
                <div className="dots">
                    <div className="dot-container">
                        <i>...</i>
                        <ul className="dot-options d-none ">
                            {options}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="task">
                <ul className="task-list">
                {dataInList}

                </ul>
            </div>
        </div>
    )
}