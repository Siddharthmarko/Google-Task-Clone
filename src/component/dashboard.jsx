import React from "react"
import CheckedList from "./checkedList";
import { useData } from "./context/task";

export default function DashsBoard(){
    const {state} = useData()

    const dashBoardList = state.filter(item => item.checked).map(item => (
        <CheckedList key={item.id} data={item} />
    ));
    return (
        <div className="dash-board" >
            {/* <h1>DashBoard</h1> */}
            {dashBoardList}
        </div>
    )
}