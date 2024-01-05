import React,{useState} from  'react';
import './App.css'

function App() {

  const[count , setCount]= useState(0)

  const increment = ()=>{
    setCount(count+1)
  };

  const decrement = ()=>{
    if(count <=0){
      alert("will not go backwards any more")
      return
    }else{
      setCount(count-1)
    }
   
  }

  return(
    <div className='app'>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}> decrement </button>
    </div>
  );

}

export default App