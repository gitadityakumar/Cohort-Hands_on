import   { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';  // Import a specific spinner from react-spinners
import Appbar from './components/Appbar';

const Landing = lazy(() => import('./components/Landing'));
const Register = lazy(() => import('./components/Register'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <ClipLoader size={50} color={"#123abc"} loading={true} />
          </div>}><Dashboard/></Suspense>} />
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
