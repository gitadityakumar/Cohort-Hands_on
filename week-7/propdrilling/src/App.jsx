import { useState } from 'react'


function App() {
   const [count, setCount] = useState(0)

  return (
    <>
     <Count count={count} setCount={setCount}/>
    </>
  )
}

function  Count({count,setCount}){
  return <div>
    <h1>{count}</h1>
    <Buttons count={count} setCount={setCount}/>
    {/* this is prodrilling */}

  </div>
}

function Buttons({count,setCount}){
    return <>
    <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:'green'}}>Increase</button>
    <button onClick={()=>{setCount(count-1)} } style={{backgroundColor:'red'}}>Decrease</button>
    </>
}

export default App
