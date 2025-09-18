import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'
import Upload from './DashboardComponents/Upload'
import Overview from './DashboardComponents/Overview'
import Goals from './DashboardComponents/Goals'
import Spendings from './DashboardComponents/Spendings/Spendings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/upload" element={<Upload />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/goals" element={<Goals />} /> 
        <Route path="/dashboard/spendings" element={<Spendings />} /> 
      </Route>
    </Routes>
  )
}

export default App
