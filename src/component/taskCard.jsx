import React, { useState } from "react"
import { useData } from "./context/contextProvider"
import { MoreOutlined } from "@ant-design/icons";

export default function TaskCard({data}){
    const [display, setDisplay] = useState(false);
    const {dispatcher} = useData();
    // Deleting the task
    function deleteTask(task){
        dispatcher({ type: 'deleteTask', child: task });
    }

    // move task to another list
    function move (listId, task) {
        let obj = JSON.parse(JSON.stringify(task));
        obj.listId = listId;
        deleteTask(task);
        dispatcher({type: 'task', data: obj});
    };
    
    return ( <>
        <li className="flex justify-between " >
                {
                (data.complete )
                ? <div 
                    className="flex gap-4 items-center" >
                    <input 
                        className="rounded-full w-4 h-4 border border-slate-300 "
                        type="checkbox" 
                        checked={data.complete}
                        onChange={() => 
                            dispatcher({ 
                                type: 'completeTask', 
                                listId: data.listId, 
                                id: data.id, 
                                value: false 
                            })} 
                        />
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
            
                <div >
                    { (data.complete) 
                        ?
                         <li 
                            onClick={() => deleteTask(data)}
                            >Delete
                        </li>
                        : 
                        <div 
                            className="relative" 
                            onBlur={() => 
                                setTimeout(() => 
                                    { setDisplay(false) }, 1000)}  
                            >
                                <MoreOutlined onClick={() => setDisplay(!display)} />
                                <ul 
                                    style={{ marginLeft: '-200px' }} 
                                    className={`shadow-xl absolute bg-white	 rounded-3xl ${display || 'd-none'}`}
                                >
                                <li 
                                    onClick={() => deleteTask(data)}
                                    className="text-sm my-3 px-7  hover:bg-slate-100" 
                                >Delete
                                </li>
                                    <div className="border" >
                                    <span className="text-sm my-3 px-7  bg-slate-100" >move to </span>
                                    {<ListOptions onList={move} thisTask={data} />}
                                    </div>
                            </ul>
                            </div>

                                }
                
            </div>
        </li>
      
        </>)
}

function ListOptions({ onList, thisTask }){
    const { state } = useData();
    let list = state;
    return (
        <> 
            {list.map((item) => 
                <li 
                    onClick={() => onList(item.id, thisTask)}
                    className="text-xs my-2 px-7 hover:bg-slate-100"
                    key={item.id} 
                    >
                        {item.name}
                </li>)}
        </>
    )
}