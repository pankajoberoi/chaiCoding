// import React, { useState } from 'react'


// function Counter() {

//     let [Count,setCount]=useState(1);
    
//     function handleIncrement(){
//         if(Count>=5) return 
//         setCount(Count + 1);
        
//     }

//     function handleDecrement(){
//         if(Count<=0) return (alert("pankha band ho gya bas kar"))
//         setCount(Count - 1) 
//     }
    
//     function handleReset(){
//       setCount(Count=1)
//     }

 

//   return (
//     <div>
//       <h1>Fan-Speed - {Count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// export default Counter




import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counter'
function Counter() {
  const counterContext=useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>{counterContext.setCount(counterContext.count+1)}}>Inc</button>
      <button onClick={()=>{counterContext.setCount(counterContext.count-1)}}>Dec</button>
    </div>
  )
}

export default Counter











