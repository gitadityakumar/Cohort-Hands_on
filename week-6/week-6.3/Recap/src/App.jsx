import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function counter(){
    setCount(count + 1)
  }

  return (
    <>
     <button onClick={counter}>Count is {count}</button>
      
    </>
  )
}

export default App
