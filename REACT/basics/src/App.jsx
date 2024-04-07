import { useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Mybutton({setname}){
  return(
    <input type="text" placeholder='Enter your name' onChange={(e)=>setname(e.target.value)}/>

  );
}
function App() {
  const [name,setname]  = useState('');
  return(
    <>
      <h1>Welcome to my App</h1>
      <Mybutton setname = {setname}></Mybutton>
      <div>{name}</div>

    </>
  )
}

export default App
