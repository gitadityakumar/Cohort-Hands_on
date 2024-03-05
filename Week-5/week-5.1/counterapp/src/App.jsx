
// import './App.css'

let state ={
  count: 0
}

function App() {

  function onclickhandler(state){
    state.count = state.count + 1;
  }

  return (
    <>
     <div>
      Hi There! <br></br>
      <button onClick={onclickhandler}>count:{state.count}</button>
     </div>
        
    </>
  )
}

export default App
