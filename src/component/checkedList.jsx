import React, { useState } from "react"
import TaskCard from "./taskCard"

const options = [
    "Sort by date",
    "Sort by My order",
    "Rename List",
    "Delete List",
    "Delete all complete tasks"
];
export default function CheckedList({ data }) {
    const [display , setDisplay] = useState();
    let complete = [];
    let nonComplete = [];
    const dataInList = data.task.map((item) => {
        if (!item.complete){
            complete.push(<TaskCard key={item.id} data={item} />)
        }else {
            nonComplete.push(<TaskCard key={item.id} data={item} />)
        }
    })
    
    return (
        <div className="card" id="style-3">
            <div className="head">
                <div>
                    <h1>{data.name}</h1>
                </div>
                <div className="dots">
                    <div className="dot-container">
                        <i onClick={() => setDisplay(!display)} >...</i>
                        <ul className={`dot-options ${!display ? 'd-none' : ''}`}>
                            {options.map((li, idx) => {
                                return <li key={idx} >{li}</li>
                            })}

                        </ul>
                    </div>
                </div>
            </div>
            <div className="task">
                <ul className="task-list">
                {complete}
                {(nonComplete.length !== 0) ? <>
                    <p>complete hai</p>
                    {nonComplete}
                </> : ''}

                </ul>
            </div>
        </div>
    )
}