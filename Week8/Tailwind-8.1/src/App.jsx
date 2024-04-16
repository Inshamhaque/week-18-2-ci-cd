import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <div className='grid grid-cols-9 '>
      <div className='col-span-3 bg-slate-800 md:bg-transparent'>hello</div>
      <div className='col-span-3 bg-slate-500	'>hello</div>
      <div>hello</div>
    </div>
  )
}

export default App
