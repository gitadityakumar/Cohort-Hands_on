
// import './App.css'

import { useState } from "react"



function App() {

  const [count, setCount] = useState(0);

  function onclickhandler(){
    setCount(count + 1);
  }

  return (
    <>
     <div>
      Hi There! <br></br>
      <button onClick={onclickhandler}>counter: {count}</button>
      
     </div>
        
    </>
  )
}

export default App
