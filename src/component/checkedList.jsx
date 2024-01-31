import React from "react"
import TaskCard from "./taskCard"

let tasks = [
     { 
        title: 'first',
        id: 2, 
        repeat: true, 
        time: 432, 
        date: 3423, 
        listName: 'list1', 
        description: 'jflsjfsdlf', 
        Complete: true, 
    }
     ]

    export default function CheckedList({data}){
        
        function sortData() {}
        const dataInList = tasks.map((item) => {
        return <TaskCard data={item}/>
    })   
    console.log(data);
    return(
        <div> 
            <h1>{data.name}</h1>
            {dataInList}
        </div>
    )
}