import React, { useState } from "react"
import TaskCard from "./taskCard"
import { MoreOutlined, CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";


const options = [
    "Sort by date",
    "Sort by My order",
    "Rename List",
    "Delete List",
    "Delete all complete tasks"
];
export default function CheckedList({ data }) {
    const [display , setDisplay] = useState();
    const [hideComplete, setHideComplete] = useState(false);
    // const [hover, ]
    let complete = [];
    let nonComplete = [];
    const dataInList = data.task.map((item) => {
        if (!item.complete){
            nonComplete.push(<TaskCard key={item.id} data={item} />)
        }else {
            complete.push(<TaskCard key={item.id} data={item} />)
        }
    })
    
    return (
        <div className="p-5 h-[512px] border w-full max-w-2xl max-w-xl min-w-72 rounded-2xl overflow-auto bg-white">
            <div className="flex justify-between">
                <h1 className="font-bold " >{data.name}</h1>
                <MoreOutlined onClick={() => setDisplay(!display)} />
                <ul className={`shadow-xl absolute bg-white	 rounded-3xl ${!display ? 'd-none' : ''}`}>
                    {options.map((li, idx) => {
                        return <li className="text-sm my-4 px-7 py-1 hover:bg-slate-100" key={idx} >{li}</li>
                    })}

                </ul>
            </div>
                <ul className="flex flex-col gap-3 pt-7 ">
                {nonComplete}
                {(complete.length !== 0) ? <>
                <li 
                    className="flex gap-5" 
                    onClick={() => setHideComplete(!hideComplete)}    
                >
                    {hideComplete ? <CaretRightOutlined/> : <CaretDownOutlined/>}
                    <p>complete </p>
                </li>
                    {hideComplete ? '' : complete}
                </> : ''}

                </ul>
       
        </div>
    )
}