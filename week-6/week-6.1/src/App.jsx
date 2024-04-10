
import { useState } from "react";

function App() {

  return (
    <div>
      <HeaderWtihButtonn/>
     <Header title="Header1"/>
     <Header title="Header2"/>
    </div>
  )
}
//component that causes unncessary re-renders
function Header({title}){
  return <div>
    {title}
  </div>
}

//comonent that doesn't cause extra re-renders
function HeaderWtihButtonn(){
  const [title, setTitle] = useState("my name is Aditya kumar");

  function updateTitle(){
   setTitle("my name is "+ Math.random());
  }

  return (
    <div>
    <button onClick={updateTitle}>Update the title</button>
     <Header title={title}/>
     <Header title="Header with button"/>
    
    </div>
  )
}

export default App
