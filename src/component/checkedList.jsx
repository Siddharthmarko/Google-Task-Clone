import React from "react"
import TaskCard from "./taskCard"

    export default function CheckedList({data}){
        // state use for pop up create name of list
        function rename() { }

        const dataInList = data.task.map((item) => {
        return <TaskCard key={item.id} data={item}/>
    })   
    // console.log(data);
    return(
        <div className="list" > 
            <h1>{data.name}</h1>
            {dataInList}
        </div>
    )
}