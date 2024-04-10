
import { useState } from "react";
import React from "react";

function App() {
 const [title, setTitle] = useState("my name is Aditya kumar");

 function updateTitle(){
  setTitle("my name is "+ Math.random());
 }
 

  return (
    <div>
    <button onClick={updateTitle}>Update the title</button>
     <Header title={title}/>
     <Header title="Header1"/>
     <Header title="Header2"/>
     <Header title="Header3"/>

    </div>
  )
}

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }



const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
});

export default App
