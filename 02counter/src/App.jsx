import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  const addValue = () => {
    // setCounter(counter+1);    also written as
    setCounter(prevCounter=>prevCounter+1);
    // console.log(counter, "increased");
    if(counter>=20){
      setCounter(0);
    }
  }
  const subValue = () => {
    setCounter(counter-1);
    // console.log(counter, "decreased");
    if(counter<=0){
      setCounter(0);
    }
  }
  return (
    <>
      <h1>Vite + React</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Increase: {counter}</button>
      <button onClick={subValue}>Decrease: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}
export default App
