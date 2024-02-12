import React from 'react'
import SideBar from './component/sidebar'
import DashsBoard from './component/dashboard'
import ContextProvider from './component/context/contextProvider'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 

function App() {

  return (
    <ContextProvider>
      <Router>
        <Routes>
              <Route path='/' element={<SideBar />}>
              <Route index element={<DashsBoard />} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;