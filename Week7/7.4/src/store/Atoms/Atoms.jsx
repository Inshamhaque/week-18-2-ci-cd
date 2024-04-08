
import { atom, selector } from "recoil"
export const notificationAtom = atom({
    key: 'notificationAtom',
    default : 12
})
export const jobsAtom = atom({
    key: 'jobsAtom',
    default : 0
})
export const networkAtom = atom({
    key: 'networkAtom',
    default : 102
})
export const messagingAtom = atom({
    key: 'messagingState',
    default : 0
})
export const totalnotification = selector({
    key : "totalnotification",
    get : ({get})=>{
        const notification = get(notificationAtom);
        const messaging = get(messagingAtom);
        const network = get(networkAtom);
        const jobs = get(jobsAtom);
        return notification + messaging+network+jobs;
    }
})