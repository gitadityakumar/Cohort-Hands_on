import {  useRecoilValue } from "recoil"
import { networkAtom,jobsAtom,notificationsAtom, totalNotificationSelector,messagingAtom,} from "./atom"
// import { useMemo } from "react";


function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCout = useRecoilValue(jobsAtom);
  const messagingNotificationCout = useRecoilValue(notificationsAtom);
  const notificationCout = useRecoilValue(messagingAtom);
  const finalvalue = networkNotificationCount >= 100 ? "99+" : networkNotificationCount;
  const totalnotficaionCount = useRecoilValue(totalNotificationSelector)

  //totalnotficaionCount can be calculted by this way using usememeo
  // const totalnotficaionCount = useMemo(()=>{
  //   return networkNotificationCount + jobsNotificationCout + messagingNotificationCout + notificationCout;
  // },[networkNotificationCount,jobsNotificationCout,messagingNotificationCout,notificationCout])

  return (
    <>
    
    <h1>Atom in recoil</h1>
    <button>Home</button>
    <button>My Network({finalvalue})</button>
    <button>jobs({jobsNotificationCout})</button>
    <button>Messaging({messagingNotificationCout})</button>
    <button>Notifications ({notificationCout})</button>
    <button>Me({totalnotficaionCount}) </button>
   </>
  )
}

export default App
