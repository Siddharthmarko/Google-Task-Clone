import React, { useState } from "react"
import { useData } from "./context/contextProvider"
import { Select } from "antd";
import { MoreOutlined } from "@ant-design/icons";

const Options = [
    'Delete',
    'Change List',
];
export default function TaskCard({data}){
    const [display, setDisplay] = useState(false);
    const {dispatcher} = useData();

    function handleClick (value) {
        console.log(value);
    };
   
    return ( <>
        <li className="flex justify-between " >
            {
            (data.complete )
                ? 
                <div 
                    className="flex gap-4 items-center" >
                <input 
                    className="rounded-full w-4 h-4 border border-slate-300 "
                    type="checkbox" 
                    onChange={() => dispatcher({ type: 'completeTask', listId: data.listId, id: data.id, value: false })} 
                    checked={data.complete}/>
                    <del className="mx-3" >{data.title} </del>
                </div>  
                : 
                <div 
                    className="flex gap-4 items-center" > 
                <input 
                    className=" rounded-full w-4 h-4 border border-slate-300"
                    type="checkbox" 
                    onChange={(e) => dispatcher({ type: 'completeTask', listId: data.listId, id: data.id, value: e.target.checked 
                })} />
                <p>{data.title}</p>
                </div>
            }
            
            <div className="">
                {
                    (data.complete) ?
                           <li 
                                onClick={() =>
                                    dispatcher({ 
                                        type: 'deletecomplete', 
                                        listId: data.listId, 
                                        id: data.id,  
                                    })} 
                                    >Delete
                            </li>
                        : <>
                            <MoreOutlined onClick={() => setDisplay(!display)} />
                                    <ul className={`shadow-xl absolute bg-white	 rounded-3xl ${!display ? 'd-none' : ''}`}>
                                    {Options
                                        .map((li, idx) =>  <li 
                                                        className="text-sm my-3 px-7  hover:bg-slate-100" key={idx} >{li}</li>
                                        )}
                                    <div className="border" >
                                    {<ListOptions onList={handleClick} />}
                                    </div>
                            </ul>

                </>}
                
            </div>
        </li>
      
        </>)
}

function ListOptions({ onList }){
    const { state } = useData();
    let arr = state.map((e) => {
            return {name: e.name, id: e.id};
    })
    return (
        <> 
            {arr.map((item) => 
                <li 
                    onClick={() => onList(item)}
                    className="text-xs my-2 px-7 hover:bg-slate-100"
                    key={item.id} 
                    >
                        {item.name}
                </li>)}
        </>
    )
}