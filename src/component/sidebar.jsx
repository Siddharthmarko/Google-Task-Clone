import React, { useState } from "react"
import { useData } from "./context/contextProvider";
import { Outlet } from "react-router-dom";
import { UserOutlined, MenuOutlined, CheckOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'
import CreateList from "./subCompo/createList";
import CreatTaskForm from "./subCompo/creatTaskForm";

export default function SideBar(){
    const {state, dispatcher } = useData();
    const [showList, setShowList] = useState(false);
    const [hidesidebar, setSideBar] = useState(false);
    function dude (){
        console.log("click");
        setSideBar(!hidesidebar);
    }

    return (<>
        <div className="h-screen" >
            <header className="h-16 w-full border p-6">
                <div className="w-full h-full flex justify-between">
                    <div onClick={() => dude()} >
                        <MenuOutlined  />
                    </div>
                    <UserOutlined />
                </div>
            </header>
        
            <div className="flex" >
                <aside hidden={hidesidebar} className="w-64 p-5 flex flex-col gap-5 pb-0 bg-gray-50 ">
                <div>
                    <CreatTaskForm />
                </div>
                <div onClick={() => dispatcher({ type: 'check', all: true })} className="flex items-center  hover:bg-indigo-50  p-4 text-center w-[220px] h-[34px] rounded-[15px]">
                    <CheckOutlined />
                    <h2 className="mx-3">All Tasks</h2>
                </div>
                <div
                    onClick={() => setShowList(!showList)}
                    className="flex justify-between items-center px-4 mb-5 hover:bg-indigo-50">
                    <h2>List</h2>
                    {showList ? <UpOutlined /> : <DownOutlined />}
                </div>
                <div hidden={showList} >
                    <ul className="flex gap-5 flex-col ">
                        {state.map((item) => {
                            return (
                                <li className="flex px-4 gap-9 hover:bg-indigo-50" key={item.id}>
                                    <input type="checkbox" 
                                        name={item.name} 
                                        checked={item.checked} 
                                        onChange={(e) => 
                                            dispatcher({
                                                type: 'check', 
                                                id: item.id, 
                                                value: e.target.checked
                                        })}
                                    />
                                    <label>{item.name}</label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                    <CreateList />
            </aside>
            <div className="p-10 pb-0 h-full grow flex gap-5 overflow-scroll  bg-gray-50" >
               <Outlet/>
            </div>
        </div>
        </div>
        </>)
}