import React from "react"
import CheckedList from "./checkedList";
import { useData } from "./context/contextProvider";

export default function DashsBoard(){
    const {state} = useData()   

    return (
        <div className="dash-board" >
            {state.map(e => e.checked && <CheckedList key={e.id} data={e} />)}
        </div>
    )
}
// {state.filter(e => e.checked)
// .map(e => 
//     <CheckedList 
//         key={e.id} 
//         data={e} />)}