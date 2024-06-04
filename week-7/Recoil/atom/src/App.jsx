import {  useRecoilValue } from "recoil"
import { networkAtom,jobsAtom,notificationsAtom, messagingAtom,} from "./atom"


function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCout = useRecoilValue(jobsAtom);
  const messagingNotificationCout = useRecoilValue(notificationsAtom);
  const notificationCout = useRecoilValue(messagingAtom);
  const finalvalue = networkNotificationCount >= 100 ? "99+" : networkNotificationCount;

  return (
    <>
    
    <h1>Atom in recoil</h1>
    <button>Home</button>
    <button>My Network({finalvalue})</button>
    <button>jobs({jobsNotificationCout})</button>
    <button>Messaging({messagingNotificationCout})</button>
    <button>Notifications ({notificationCout})</button>
    <button>Me </button>
   </>
  )
}

export default App
