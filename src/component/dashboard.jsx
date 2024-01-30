import React from "react"
import TaskCard from "./taskCard";
let data = [];
export default function DashsBoard(){
    const inDashBoardList = data.map((item) => {
        if(item.checked){
            return <TaskCard data={item} />
        }
    })

    return (
        <div>

        </div>
    )
}