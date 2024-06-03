import { useContext, useState } from 'react'
import { CountContext } from './context';


function App() {
   const [count, setCount] = useState(0);

  return (
    <>
     <CountContext.Provider value={count}>
     <Count count={count} setCount={setCount}/>
     </CountContext.Provider>
     
    </>
  )
}

// eslint-disable-next-line react/prop-types
function  Count({count,setCount}){
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount}/>
    {/* this is prodrilling */}

  </div>
}

// eslint-disable-next-line react/prop-types
function CountRenderer(){
  const count = useContext(CountContext);
  return <h1>{count}</h1>
}
// eslint-disable-next-line react/prop-types
function Buttons({setCount}){
  const count = useContext(CountContext);
    return <>
    <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:'green'}}>Increase</button>
    <button onClick={()=>{setCount(count-1)} } style={{backgroundColor:'red'}}>Decrease</button>
    </>
}

export default App
