import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [input,setInput] = useState("");
  const [isEqualTo,setIsEqualTo] = useState(0);
  const inputHandler = (e)=>{
    setInput(e.target.value);
  }
  const isEqualHandler = ()=>{
    setIsEqualTo(eval(input));
  }
  const clearHandler = ()=>{
    setInput("");
  }
  return (
    <div className="App">
      <center>
      <input type="text" onChange={inputHandler} value={input}/><br/>
      <h3>Your Result is : {isEqualTo}</h3>
      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button>
      <button onClick={()=>setInput(input+'4')}>4</button><br/>

      <button onClick={()=>setInput(input+'5')}>5</button>
      <button onClick={()=>setInput(input+'6')}>6</button>
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button><br/>

      <button onClick={()=>setInput(input+'9')}>9</button>
      <button onClick={()=>setInput(input+'0')}>0</button>
      <button onClick={()=>setInput(input+'+')}>+</button>
      <button onClick={()=>setInput(input+'-')}>-</button><br/>

      <button onClick={()=>setInput(input+'*')}>*</button>
      <button onClick={()=>setInput(input+'/')}>/</button>
      <button onClick={clearHandler}>clr</button>
      <button onClick={isEqualHandler}>=</button><br/>
      </center>
    </div>
  );
}

export default App;
