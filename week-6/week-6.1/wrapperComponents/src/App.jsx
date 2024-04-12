
function App() {

  return (
    <>
     <CardWrapper  >
        <TextComponent/>
     </CardWrapper>
     <CardWrapper  >
        <TextComponent2/>
     </CardWrapper>
     <CardWrapper  >
      <h1> hi there </h1>
     </CardWrapper>

    
    </>
  )
}

function CardWrapper( {children }){
  return (
    <>
      <div style={{border:'2px solid red ',padding:15}}>
        {children }
      </div>
    </>
  )
}


function TextComponent(){
  return (
    <>
    <h1>Hi there </h1>
    </>
  )
}

function TextComponent2(){
  return (
    <>
    <h1>Hi there 2</h1>
    </>
  )
}




export default App
