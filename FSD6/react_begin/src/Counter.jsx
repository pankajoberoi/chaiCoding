import React, { useState } from 'react'






function Counter() {

    const [count,setCount]=useState(1);

    
    function handleIncrement(){
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
