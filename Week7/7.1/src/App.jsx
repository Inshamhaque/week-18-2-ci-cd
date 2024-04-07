import React, { useContext, useState } from 'react';
import './App.css';
import { CountContext } from './context';
//app function 
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}
//first rendered component, this does not contain count as the props and so does not require it to be explicitly passed as arg. 
function Count({ setCount }) {
  console.log("count component re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}
//second rendered component 
function CountRenderer() {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  );
}
//button component rendered 
function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => {setCount(count => count + 1);}}>Increment</button>
      <button onClick={() => {setCount(count => count - 1);}}>Decrement</button>
    </div> 
  );
}

export default App;