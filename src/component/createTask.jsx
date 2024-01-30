import React, {useState} from "react";

let repeat = ['No repeat', 'second option', 'third option','forth option'];
let list = ['my task'];
let defaultValue = {
    title: '',
    date: '',
    time: '',
    description: '',
    repeat: 0,
    list: 0,
}
export default function CreateTask(){
    const [text, setText] = useState(defaultValue);

    // repeat option
    repeat = repeat.map((item, index) => {
        return <option value={index}>{item}</option>
    })
    // list option
    list = list.map((item, index) => {
        return <option value={index}>{item}</option>
    })
    // console.log(repeat);

    const handleCreate = () => {
        // data == text
        // match this text.listId === main data list if yes then add this data to there 
        // console.log(text);
    }
    
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setText({...text, [name]: value});
    }
    return (<>
    <div className="border createtask " >
        <div className="">
         <label className="" >Add Title</label>
         <input type="text" name="title" placeholder="Task Title" className="border"   value={text.title} onChange={handleChange} />
        </div>
        {/* date and time ka to esa hai ki date picker lelenge */}
        <div className="">
         <label className="" >Date</label>
        <input type="text" name="date" placeholder="Task Title" className="border" value={text.date} onChange={handleChange} />
        </div>
        <div className="">
         <label className="" >time</label>
        <input type="text" name="time" placeholder="Task Title" className="border" value={text.time} onChange={handleChange} />
        </div>
        <div className="">
         <label className="" >Repeat</label>
            <select name="repeat" onChange={handleChange} defaultValue={'0'}>
            {repeat}
         </select>
        </div>
        <div className="">
         <label className="" >Description</label>
        <textarea name="description"  onChange={handleChange} defaultValue={'This is Description'} ></textarea>
        </div>
            <div className="">
                <label className="" >Select List</label>
                <select name="list" onChange={handleChange} defaultValue={'0'} >
                   {list}
                </select>
            </div>
            <button onClick={handleCreate} >Button</button>
    </div>
    </>)
}