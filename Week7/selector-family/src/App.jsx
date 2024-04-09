import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
  return(
    <Todo></Todo>
  )
}
async function Todo(){
    const res = await axios.get("https://sum-server.100xdevs.com/todos?id=1");
    console.log(res.data.todos);
    return(
      <div>hello</div>
    )
}

export default App
