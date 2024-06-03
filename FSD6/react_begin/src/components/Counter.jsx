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

function Counter() {
  return (
    <div>
      <button>Increment</button>
      <button>decrement</button>
    </div>
  )
}

export default Counter















