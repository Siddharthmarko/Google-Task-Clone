import React from "react"
import CheckedList from "./checkedList";
import { useData } from "./context/contextProvider";

export default function DashsBoard(){

    const {state} = useData()   
    const dashBoardList = state.filter(item => item.checked).map(item => (
        <CheckedList key={item.id} data={item} />
    ));
    return (
        <div className="dash-board" >
            {dashBoardList}
        </div>
    )
}