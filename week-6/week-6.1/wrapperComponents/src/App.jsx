
function App() {

  return (
    <>
     <CardWrapper innerComponent={<TextComponent/>} />
     <CardWrapper innerComponent={<TextComponent2/>} />
    </>
  )
}

function CardWrapper( {innerComponent }){
  return (
    <>
      <div style={{border:'2px solid red ',padding:15}}>
        {innerComponent }
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
