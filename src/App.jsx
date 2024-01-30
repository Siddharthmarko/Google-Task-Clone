import React,{ useState } from 'react'
import './App.css'
import CreateTask from './component/createTask'
import SideBar from './component/sidebar'
import TaskCard from './component/taskCard'

// let obj = [{ name: 'list1', id: 2, checked: true, task: [{ id: 2, repeat: true, time: 432, date: 3423, listName: 'list1', description: 'jflsjfsdlf', Complete: true, }] }];

function App() {

  return (
    <>
      {/* <TaskCard/> */}
      {/* <SideBar/> */}
      <CreateTask/>
    </>
  )
}

export default App
