import {atom, selector} from "recoil"
export const networkAtom = atom({
    key:"networkAtom",
    default:106
});

export const jobsAtom = atom({
  key:"jobsAtom",
  default:0
});

export const notificationsAtom = atom({
  key:"notificationsAtom",
  default:0
});

export const messagingAtom = atom({
  key:"messagingAtom",
  default:12
});

export const totalNotificationSelector = selector({
  key:"totalNotificationSelector",
  get:({get})=>{
    const networkNotificationCount = get(networkAtom);
    const jobsNotificationCout = get(jobsAtom);
    const messagingNotificationCout = get(notificationsAtom);
    const notificationCout = get(messagingAtom);
    return networkNotificationCount + jobsNotificationCout + messagingNotificationCout + notificationCout;
  }
})