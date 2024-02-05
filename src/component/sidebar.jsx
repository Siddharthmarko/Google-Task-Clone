import React, { useState } from "react"
import { useData } from "./context/task";
import { Outlet } from "react-router-dom";
import { Button, Modal, Select, DatePicker, TimePicker } from 'antd';
import CreateList from "./createList";
import CreatTaskForm from "./creatTaskForm";

export default function SideBar(){
    const {state} = useData();
    const [showList, setShowList] = useState(false);

    let defaultList = state.map((item) => {
            return  (
            <div key = {item.id} >
                    <input type="checkbox" name={item.name} checked={item.checked} />
                    <div>{item.name}</div>
                </div>
            )
    })
    return (<>
    <div className="main" >
            <div className="sidebar">
            <div>
                <div className="create-btn">
                    <CreatTaskForm/>
                </div>
                    <div className="all-task" >
                        <Button>All Task</Button>
                    </div>
                <div>
                    <div className="list-btn">
                        <Button onClick={() => setShowList(!showList)} >list</Button>
                    </div>
                    <div className="list-of-list" hidden={showList}>
                        {defaultList}
                        <CreateList/>
                    </div>
                </div>
            </div>
            </div>
            <div className="content-area" >
               <Outlet/>
            </div>
        </div>
        </>)
}