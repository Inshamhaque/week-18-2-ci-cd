import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import e from 'cors'
//Custom Data fetching Hook 
// function useTodos(n){
//   const [todos,setTodos] = useState([]);
//   const [loading,setLoading] = useState(true);
//   useEffect( ()=>{
//     const interval = setInterval(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res=>setTodos(res.data.todos))
//     setLoading(false);
//     },n*1000)
//     //for initial fetching of data
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//     return ()=>{
//       clearInterval(interval);
//     }
//   },[])
//   return [todos,loading];
// }
// function App() {
//   const [todos,loading] = useTodos(2);//after n seconds re-poll the backend
//   if(loading){
//     return(
//       <div>Loading...</div>
//     )
//   }
//   return(
//     <div>
//       {todos.map((todo)=>{
//         return(
//           <div id='index'>
//             <h2>{todo.title}</h2>
//             <div>{todo.id}</div>
//             <div>{todo.description}</div>
//             <div>{todo.completed?<div>true</div>:<div>false</div>}</div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
//isOnline or not navigator
// function useisOnline(){
//   const [online,setOnline] = useState(window.navigator.onLine);

//   window.addEventListener('online',()=>setOnline(true));
//   window.addEventListener('offline',()=>setOnline(false));
//   return online;
//   console.log(online);
// }
// function App(){
//   const isOnline  = useisOnline();
//   return(
//     <div>
//       {isOnline ? <div>"you are online"</div> : <div>You are offline</div>}
//     </div>
//   )
// }

// function useMousePointer(){
//   const [coord,setcoords] = useState({ x:0, y:0});
//   const handleMouseMove= (e) =>{
//     setcoords({x:e.clientX,y:e.clientY});
//   }
//   window.addEventListener('mousemove',handleMouseMove);
//   return coord;
// }
// function App(){
//   const position = useMousePointer();
//   return (
//     <div>Mouse location is {position.x},{position.y}</div>
//   )
// }

// function useInterval(callback,delay){
//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       callback();
//     },delay)
//     return ()=>{
//       clearInterval(interval);
//     }
//   },[])
// }
// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <>
//       Timer is at {count}
//     </>
//   )
// }

function useDebounce(inputValue,delay){
  const [DebouncedValue,setDebouncedValue] = useState("");
  useEffect(()=>{
    const handler = setInterval(()=>{
      setDebouncedValue(inputValue);
    },delay)
    return ()=>{
      clearInterval(handler);
    }
  },[inputValue])
  return DebouncedValue;
}
function App(){
  const[input,setInput] = useState("");
  const debouncedValue = useDebounce(input,5000);
  return(
    <div>
      Debounced value is {debouncedValue}
      <input onChange = {(e)=>setInput(e.target.value)} type="text" name="" id="" />
    </div>
  )
}
export default App
