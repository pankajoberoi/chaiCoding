import React, { useEffect, useState } from 'react'

function Api() {

    let [count,setCount]=useState(0)
    let [hunger,setHunger]=useState(false)

    useEffect(()=>{
      fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(console.log);
    },[hunger])

    
    


    function handleClick(){
        setCount(++count)
    }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=>{setHunger(!hunger)}}>Bhookh lagi hai?</button>
      <h4>{hunger?"lgi hai bhookh":"abhi baad mai khaunga"}</h4>
    </div>
  )
}

export default Api
