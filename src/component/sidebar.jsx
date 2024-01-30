import React, { useState } from "react"

let defaultList = [
    { listName: 'list 1', checked: true },
    { listName: 'list 2', checked: true },
    { listName: 'list 3', checked: true },
    { listName: 'list 4', checked: true }
];

export default function SideBar(){
    const [showList, setShowList] = useState(false);
    const [addList, setAddList]  = useState(false);
    const [listName, setListName] = useState('');

    const handleCreate = () => {
        console.log(listName);
        // add list with defualt vale like checked, name, taks
        // mai object mai chala jayega
    }
    
    function handleCheck(e){
        // yeah obje tka name lga serhc karega aur chekc undehck ka tick karnga
        // console.log(e.target.name);
    }

    defaultList = defaultList.map((item) => {
            return  (
                <div>
                    <input type="checkbox" name={item.listName} checked={item.checked} onChange={handleCheck}  />
                    <div>{item.listName}</div>
                </div>
            )
    })
    return (<>
            <div className="sidebar">
            <div>
                <div className="create-btn">
                    <button>Create</button>
                </div>
                    <div className="all-task" >
                    <button>All Task</button>
                    </div>
                <div>
                    <div className="list-btn">
                        <button onClick={() => setShowList(!showList)} >list</button>
                    </div>
                    <div className="list-of-list" hidden={showList}>
                        {defaultList}
                        <div>
                            <button onClick={setAddList} >Add list</button>
                            { 
                                addList ? 
                                            (<div> 
                                                <input type="text" value={listName} onChange={setListName} />
                                                <input type="submit" onClick={handleCreate}/>
                                            </div> ) 
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>)
}