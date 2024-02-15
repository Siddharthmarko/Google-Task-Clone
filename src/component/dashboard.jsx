import React from "react"
import CheckedList from "./checkedList";
import { useData } from "./context/contextProvider";

export default function DashsBoard(){
    const {state} = useData()   
    return ( 
        <>
        {state.map(e => e.checked && <CheckedList key={e.id} data={e} />)}
        </>
    )
}
