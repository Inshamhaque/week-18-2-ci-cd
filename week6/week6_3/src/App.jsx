import { useState, useMemo, useEffect, useCallback }from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchange1,setexchange1] = useState({});
  const [exchange2,setexchange2] = useState({});

  useEffect(()=>{
    setexchange1({
      return : 100
    })
  },[])
  useEffect(()=>{
    setexchange2({
      return : 100
    })
  },[])
  const crypto = useMemo(()=>{
    ans =  exchange1.return+exchange2.return;
    return ans;
  },[exchange1,exchange2]);
  
}
export default App
