import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, selector, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalnotification } from './store/Atoms/Atoms'
function App(){
  return(
    <RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  )
}
function Mainapp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const notification = selector(totalnotification);
  return(
    <>
    <button>Home</button>
    <button>My network({networkCount>=100?"99+":networkCount})</button>
    <button>Jobs{jobsCount}</button>
    <button>Messaging{messagingCount}</button>
    <button>Notification{notificationCount}</button>
    {/* <button>Me({notification})</button> */}
    </>
  )
}

export default App
