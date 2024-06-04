import { useSetRecoilState } from 'recoil'
import { RecoilRoot } from 'recoil'
import {  useRecoilValue } from "recoil"

import { countAtom, evenSelector } from './store/atoms/count'


function App() {
  

  return (
    <RecoilRoot>
     <Count/>
     <EvenCountRenderer/>
    </RecoilRoot>
  )
}
  // when value is derieved then useMemo is used 
// function EvenCountRenderer(){
//   const count = useRecoilValue(countAtom);
//   const isEven = useMemo(()=>{
//     return count%2==0
//   },[count])

//   return <h1>{isEven ? ' It is Even' : ''}</h1>
// }


function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);

  return <h1>{isEven%2===0 ? ' It is Even' : ''}</h1>
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
  const setCount = useSetRecoilState(countAtom);
    return <>
    <button onClick={()=>{setCount(count=>count+1)}} style={{backgroundColor:'green'}}>Increase</button>
    <button onClick={()=>{setCount(count=>count-1)} } style={{backgroundColor:'red'}}>Decrease</button>
    </>
}

export default App
