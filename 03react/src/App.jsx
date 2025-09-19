import   { useState } from 'react';
import './App.css'

function App() { 
     let [counter,setCounter] =useState (5)
  
  //  let counter=5; 

  const addValue=()=>{ 
    if(counter>=20) return;
    else{ setCounter(counter +1)
    console.log(counter) } 
  } 
  const removeValue=()=>{ 
    if (counter<=0) return ;
    else{ setCounter(counter-1)
    console.log(counter)}
  }
  return (
    <>
       <h2>Learn React</h2>
     <h3>Counter Value : {counter} </h3>
     <button  onClick={addValue}
     >Add Value  {counter}</button> <br />
     <button  onClick={removeValue}
     >Remove Value  {counter} </button> 
    </> 
  )
}

export default App
