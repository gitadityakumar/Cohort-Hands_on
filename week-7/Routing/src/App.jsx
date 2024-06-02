import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Register from './components/Register'

import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   
    </BrowserRouter>
  )
}

export default App
