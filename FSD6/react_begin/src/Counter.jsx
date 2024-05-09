import React, { useState } from 'react'


function Counter() {

    let [count,setCount]=useState(1);

    
    function handleIncrement(){
        if(count >= 5) return
        setCount(count + 1);
        
    }

 

  return (
    <div>
      <h1>Fan-Speed - {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter
