import { useNavigate } from "react-router-dom"


const Appbar = () => {
    const navigate = useNavigate();
  return (
    <div>
    <nav style={{ backgroundColor: '#333', padding: '1rem', textAlign: 'center' }}>
          <a onClick={()=>navigate('/')} style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
          <a onClick={()=>navigate('/dashboard')} style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</a>
          <a onClick={()=>navigate('/register')} style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Register</a>
    </nav>
</div>
  )
}

export default Appbar