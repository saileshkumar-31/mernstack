import React from 'react'
import { useState, useMemo } from 'react';

const Expensive = () => {
  const [ count, setCount] = useState(0);
  const[ text, setText] = useState(" ");  
  const expensiveCalcualtion =useMemo(()=>{
    console.log("Running expensive Operation")
    let total =0;
    for (let i = 0; i<2000000;i++){
        total+= count;
    }
    return total;
  },[count]);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick ={()=>setCount(count+1)
      }>Click</button>
      <input 
      type="text"
      name = "text"
      id = "text"
      onChange = {(e)=>setText(e.target.value)}
      />
        <div> 
            <h1>ExpensiveCalculation:{expensiveCalcualtion}</h1>
        </div>

    </div>

    
  )
}

export default Expensive
