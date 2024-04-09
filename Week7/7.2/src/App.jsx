import React  from 'react';
import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from 'recoil';
import { countAtom } from './Store/Atoms/count';
import { evenselector } from './Store/Atoms/selectors/evenselector';
//app function 
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
//first rendered component, this does not contain count as the props and so does not require it to be explicitly passed as arg. 
function Count() {
  console.log("count re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons/>
      <Show/>
    </div>
  );
}
//second rendered component 
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
    </div>
  );
}
//button component rendered 
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendered");
  return (
    <div>
      <button onClick={() => {setCount(count=>count+1);}}>Increment</button>
      <button onClick={() => {setCount(count=>count-1);}}>Decrement</button>
    </div> 
  );
}
//extra functionality
function Show(){
  const iseven = useRecoilValue(evenselector);
  return(
    <div>
      {iseven?"it is even":null}
    </div>
  )
}
export default App;