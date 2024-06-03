import { RecoilRoot, useRecoilState } from 'recoil'
import {  useRecoilValue } from "recoil"

import { countAtom } from './store/atoms/count'

function App() {
  

  return (
    <RecoilRoot>
     <Count/>
    </RecoilRoot>
  )
}

// eslint-disable-next-line react/prop-types
function  Count(){
  return <div>
    <CountRenderer  />
    <Buttons />
  </div>
}

// eslint-disable-next-line react/prop-types
function CountRenderer(){
  const count = useRecoilValue(countAtom);
 
  return <h1>{count}</h1>
}
// eslint-disable-next-line react/prop-types
function Buttons(){
  const [count,setCount] = useRecoilState(countAtom);
    return <>
    <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:'green'}}>Increase</button>
    <button onClick={()=>{setCount(count-1)} } style={{backgroundColor:'red'}}>Decrease</button>
    </>
}

export default App
