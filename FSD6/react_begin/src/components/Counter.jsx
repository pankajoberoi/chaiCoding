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





// import React from 'react'
// import { CounterContext } from '../context/Counter' 
// import { useContext } from 'react'

// function Counter() {
//   const counterContext=useContext(CounterContext)
//   return (
//     <div>
//       <button onClick={()=>{counterContext.setCount(counterContext.count+1)}}>Increment</button>
//       <button onClick={()=>{counterContext.setCount(counterContext.count-1)}}>decrement</button>
//     </div>
//   )
// }

// export default Counter



import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counter'
function Counter() {
  const CounterState=useContext(CounterContext)
  
  return (
    <div>
      <button onClick={()=>{CounterState.SetCount(CounterState.count+1)}}>increment</button>
      <button onClick={()=>{CounterState.SetCount(CounterState.count-1)}}>decrement</button>
    </div>
  )
}

export default Counter












