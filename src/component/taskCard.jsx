import React from "react"
import { useData } from "./context/task"


export default function TaskCard({data}){
    const {state, dispatcher} = useData();

    const op = {
        rename: { type: 'rename', id: data.listName, new: 'falana' },
        delete: {
            type: 'delete',
            id: 'list1',
            taskId: data.id,
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
            <div className="tasks">
                <p>{data.title}</p>
                <button onClick={() => dispatcher(op.rename)} >rename task</button>
                <button onClick={() => dispatcher(op.delete)} >delete task</button>
                <button onClick={() =>dispatcher(op.move)} >move list</button>
                <button onClick={() => dispatcher(op.complete)}>Delete complete</button>
                {/* <button>sort by</button> */}
            </div>
        </>)
}