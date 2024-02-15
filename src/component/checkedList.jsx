import React, { useState } from "react"
import TaskCard from "./taskCard"
import { MoreOutlined, CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import CreateList from "./subCompo/createList";
import { useData } from "./context/contextProvider";


const options = [
    "Delete List",
    "Delete all complete tasks"
];
export default function CheckedList({ data }) {
    const [display , setDisplay] = useState();
    const [hideComplete, setHideComplete] = useState(false);
    const { dispatcher }= useData();

    // Array of list for seperation
    let complete = [];
    let nonComplete = [];
    data.task.map(e =>
        (!e.complete) 
        ? nonComplete.push(<TaskCard key={e.id} data={e} />)
        : complete.push(<TaskCard key={e.id} data={e} />) )
        
    return (
        <div 
            className="p-5 h-[512px] border w-full max-w-2xl max-w-xl min-w-72 rounded-2xl overflow-auto bg-white">
            <div 
                className="flex justify-between">
                <h1 
                    className="font-bold " 
                    >{data.name}
                </h1>
                <div 
                    onBlur={() => setTimeout(() => {setDisplay(false)}, 1000)} 
                    className="relative" 
                >
                <MoreOutlined 
                    onClick={() => setDisplay(!display)} 
                />
                    <ul 
                        style={{ marginLeft: '-225px' }} 
                        className={`shadow-xl absolute bg-white	 rounded-3xl ${!display ? 'd-none' : ''}`}
                    >
                        <li 
                            className="text-sm my-4 px-7 py-1 hover:bg-slate-100"
                        >
                            <CreateList 
                                rename={data.id} 
                            />
                        </li>
                    {options.map((li, idx) =>
                        <li 
                            onClick={() => 
                                    dispatcher({ 
                                        type: 'cardOption', 
                                        option: idx, 
                                        data: data.id
                                    })}
                            className="text-sm my-4 px-7 py-1 hover:bg-slate-100" 
                            key={idx} 
                        >{li}</li>
                    )}

                </ul>
                </div>
            </div>
                <ul 
                    className="flex flex-col gap-3 pt-7 ">
                    {nonComplete}
                    {   (complete.length === 0) || <>
                            <li 
                                className="flex gap-5" 
                                onClick={() => 
                                    setHideComplete(!hideComplete)
                                    }    
                                >
                                    {hideComplete 
                                        ? <CaretRightOutlined/> 
                                        : <CaretDownOutlined/>
                                    }
                                    <p>complete </p>
                            </li>       
                        {hideComplete || complete}
                </> }

                </ul>
       
        </div>
    )
}