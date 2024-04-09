import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import {RecoilRoot, useRecoilState} from "recoil";
import { todoAtomFamily } from './Todoatom';
function App() {
  return(
    <RecoilRoot>
      <Todo/>
    </RecoilRoot>
  )
}
function Todo(id){
  const [todo,setTodo] = useRecoilState(todoAtomFamily(id));
  return(
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
