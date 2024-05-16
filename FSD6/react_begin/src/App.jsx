import React from 'react'
// import Toggle from './components/Toggle'
import './style.css'
// import Input from './components/Input'
import Api from './components/Api'
// import ZomatoCard from './components/ZomatoCard'
// import Counter from './components/Counter'
// import Card from './Cards'

function App() {
    // let yourName=prompt("Enter Your name")
  return (
    <div >
        
        <Api/>
        {/* <Input/> */}
        {/* <Toggle/>  */}
        {/* <Counter/> */}
        {/* <Card/> */}
        {/* {yourName?<ZomatoCard title={yourName}/>:<h1>Please Enter Your name first</h1>} */}

    </div>
  )
}

export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0    )
//   let [city,SetCity]=useState('BHOPAL')
//   useEffect(()=>{
//     fetch('https://dummyjson.com/products/1')
//   .then(res => res.json())
//   .then(json => console.log(json))
//   },[count])
  
//   function fun1(){
//     SetCount(++count)

//   }
//   return (
//     <div>
//      <p>{count}</p>
//      <button  onClick={fun1}>   click me</button>
//      <button  onClick={()=>SetCity('delhi')}>  change</button>
//      <h4>  {city}</h4>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import {BrowserRouter,Route,Routes}  from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import NavBar from './NavBar'
// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route   path='/'  element={<Home/>}/>
//         <Route   path='/about'  element={<About/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App


