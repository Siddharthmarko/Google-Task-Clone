import React,{ useState } from 'react'
import CreateTask from './component/createTask'
import SideBar from './component/sidebar'
import TaskCard from './component/taskCard'
import DashsBoard from './component/dashboard'
import ContextProvider from './component/context/task'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<DashsBoard />} />
            {/* <Route path="sidebar" element={<SideBar />} />
            <Route path="create-task" element={<CreateTask />} /> */}
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;