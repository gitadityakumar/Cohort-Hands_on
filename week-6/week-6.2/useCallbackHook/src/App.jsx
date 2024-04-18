import { useState, memo} from "react"

function App() {
  const [count, setCount] = useState(0);


  function logSomething(){
    console.log("child clicked");
  }
 

  return (
    <>
      <h1>useCallbackHOOK</h1> 
      <Child inputFuncton={logSomething} />
     <button
     onClick={()=>{setCount(count+1)}}
     >Click me</button>


    </>
  )
}

// eslint-disable-next-line react/display-name
const Child = memo((inputFuncton)=>{
    console.log("child render");
   
    return <div>
      <button onClick={inputFuncton}>Button clicked</button>
    </div>
})

export default App
