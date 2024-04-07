import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'zod';
//fetching 
function App(){
  const [todos,settodos]  = useState([]);
    useEffect(()=>{
      setInterval(()=>{
        fetch('https://sum-server.100xdevs.com/todos')
        .then(async(res)=>{
        const json = await res.json();
        settodos(json.todos);
      }),7000})
      ,[]})
    return(
      <div>
        {todos.map((todo)=>(
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
          
        ))}
      </div>
    )

}

export default App;