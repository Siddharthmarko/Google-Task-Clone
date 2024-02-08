import React, { useState } from "react"
import { useData } from "./context/contextProvider"
import { Select } from "antd";

const Options = [
    'Delete',
    'Add Different List',
];
export default function TaskCard({data}){
    const [display, setDisplay] = useState(false);
    const {dispatcher} = useData();

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
   
    return ( <>
        <li>
            {data.complete ? 
            <>
                <input 
                    type="checkbox" 
                    onChange={() => dispatcher({ type: 'completeTask', listId: data.listId, id: data.id, value: false })} 
                    checked={data.complete}/>
                    <del> 
                        <p>{data.title}</p>
                    </del>
            </>: <> <input 
                type="checkbox" onChange={(e) => dispatcher({ type: 'completeTask', listId: data.listId, id: data.id, value: e.target.checked })} />
                <p>{data.title}</p>
            </>}
            
            <div className="dot-container">
                {
                data.complete 
                    ? <li onClick={() => dispatcher({ type: 'deletecomplete', listId: data.listId, id: data.id,  }) } >Delete</li>
                : <>
                     <i onClick={() => setDisplay(!display)} >...</i>
                            <ul className={`dot-options ${!display ? 'd-none' : ''}`}>
                                {Options.map((li, idx) => {
                                    return <li key={idx} >{li}</li>
                                })}
                                {<ListOptions onChange={onChange} />}
                            </ul>

                </>}
                
            </div>
        </li>
      
        </>)
}

function ListOptions( { onChange } ){
    const { state } = useData();
    let arr = state.map((e) => {
            return {value: e.id, label: e.name};
    })
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
            <Select
                placeholder="Select"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={filterOption}
                options={arr}
            />
        </>
    )
}