import React, { useState } from "react"
import { useData } from "./context/task"

const Options = [
    <li>Delete</li>,
    <li>Add Different List</li>,
    <li>New List</li>
];
export default function TaskCard({data}){
    const [complete, incomplete] = useState();
    const [display, setDisplay] = useState(false);
    const {dispatcher} = useData();

    return ( <>
        <li className="addTask">Add Task</li>
        <li>
            {data.complete ? 
            <>
                    <input type="checkbox" onChange={(e) => dispatcher({ type: 'completeTask', listId: data.listId, id: data.id, value: e.target.checked })} checked={data.complete}/>
                <del> <p>{data.title}</p></del>
            </>: 
            <>
                <input type="checkbox" />
                <p>{data.title}</p>
            </>}
            
            <div className="dot-container">
                {
                data.complete 
                ? 'delete' 
                : <>
                     <i onClick={() => setDisplay(!display)} >...</i>
                            <ul className={`dot-options ${!display ? 'd-none' : ''}`}>
                                {Options}
                            </ul>

                </>}
                
            </div>
        </li>
      
        </>)
}