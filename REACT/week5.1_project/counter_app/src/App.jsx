import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <Custombutton count={count} setCount={setCount}></Custombutton>
    </div>
  )
}
function Custombutton(props){
  function onclickhandler(){
    props.setCount(props.count+1);
  }
  return(<button onClick={onclickhandler}>
    Counter {props.count}
  </button>)
}

export default App;
