import { Route,BrowserRouter,Routes,  } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Register from './components/Register'
import Appbar from './components/Appbar'

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
