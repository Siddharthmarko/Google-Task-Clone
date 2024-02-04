import React from "react"
import { useData } from "./context/task"

const Options = [
    "Delete",
    "Add Different List",
    "New List"
];
export default function TaskCard({data}){
    const {state, dispatcher} = useData();

    const op = {
        rename: { type: 'rename', id: data.listName, new: 'falana' },
        delete: {
            type: 'delete',
            id: 'list1',
            taskId: data.id,
        },
        sort: {
            type: 'sort',
            id: 'list1',
        },
        move: {
            type: 'move',
            id: 'list1',
            taskId: data.id,
            where: 'list2',
        },
        complete: {
            type: 'complete',
            id: 'list1',
        }
    }
    // console.log(data);
    return ( <>
        <li className="addTask">Add Task</li>
        <li>
            <input type="checkbox" />
            <p>Task list 1</p>
            <div className="dot-container">
                <i>...</i>
                <ul className="dot-options d-none ">
                    {Options}
                    </ul>
            </div>
        </li>
      
        </>)
}
{/* <div className="tasks">
    <span>{data.title}</span>
    <button onClick={() => dispatcher(op.sort)} >Sort</button>
    <button onClick={() => dispatcher(op.rename)} >rename task</button>
    <button onClick={() => dispatcher(op.delete)} >delete task</button>
    <button onClick={() => dispatcher(op.move)} >move list</button>
    <button onClick={() => dispatcher(op.complete)}>Delete complete</button>
    <button>sort by</button>
</div> */}