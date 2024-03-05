/* eslint-disable react/prop-types */

// import './App.css'

import { useState } from "react"



function App() {

  const [count, setCount] = useState(0);

  

  return (
    <>
     <div>
      Hi There! <br></br>
      <CustomButton count={count} setCount={setCount}></CustomButton><br></br>
      <CustomButton count={count +1} setCount={setCount}></CustomButton><br />
      <CustomButton count={count-1} setCount={setCount}></CustomButton><br />
      <CustomButton count={count*10} setCount={setCount}></CustomButton><br />
      
     </div>
        
    </>
  )
}

function CustomButton(props){

  function onclickhanderr(){
    // eslint-disable-next-line react/prop-types
    props.setCount(props.count +1);
  }
  return (<>
    <button onClick={onclickhanderr}>Counter {props.count}</button>
    </>)
}

export default App
