import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [count,setcount] = useState(0);
  const[num,setnum]  = useState(0);
  const[sum,setSum]  = useState(0);
  function in_change(e){
    setnum(Number(e.target.value));
  }
  // let sum = useMemo(()=>{
  //   let sum=  0;
  //   for(let i=0;i<num;i++){
  //     sum +=i;
  //   }
  //   return sum;
  // },[num])
  //in the useEffect hook, we use the state variability 
  useEffect(()=>{
    let sum  = 0;
    for(let i=0;i<num;i++){
      sum+=i;
    }
    setSum(sum);
  },[num])

  return(
    <div>
      <input type="text" placeholder='what is the value of n?' onInput ={in_change} />
      <h1>sum is {sum}</h1>
      <button onClick={()=>{
        setcount(count=>count+1);
      }}>Counter({count})</button>
    </div>
  )
}
export default App
