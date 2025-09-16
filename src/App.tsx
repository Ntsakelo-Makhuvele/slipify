import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Dashboard from './screens/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
