// import React from 'react'
// // import Toggle from './components/Toggle'
// import './style.css'
// // import Input from './components/Input'
// import Api from './components/Api'
// // import ZomatoCard from './components/ZomatoCard'
// // import Counter from './components/Counter'
// // import Card from './Cards'

// function App() {
//     // let yourName=prompt("Enter Your name")
//   return (
//     <div >
        
//         <Api/>
//         {/* <Input/> */}
//         {/* <Toggle/>  */}
//         {/* <Counter/> */}
//         {/* <Card/> */}
//         {/* {yourName?<ZomatoCard title={yourName}/>:<h1>Please Enter Your name first</h1>} */}

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './components/Home'
// import About from './components/About'
// import {Navbar1} from './components/Navbar'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import List from './components/List'
// import Profile from './components/Profile'

 
// function App() {
//   return (
//     <div>
//       <Navbar1/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/about/:Fname/' element={<About/>}/>
//         <Route path='/profile' element={<Profile/>}/>
//         <Route path='/profile/:designation' element={<Profile/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App





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


// import React, { useState } from 'react'
// import ChatRoom from './components/ChatRoom'

// function App() {
//   const [roomId,setRoomId]=useState('general')
//   const [show,setShow]=useState(false)
  
//   return (
//     <div>
//       <label>Choose the chat room : {' '}
//       <select value={roomId}
//               onChange={(e)=>{setRoomId(e.target.value)}}
//       >
//         <option>general</option>
//         <option>travel</option>
//         <option>music</option>
//       </select>
//       </label>
//       <button onClick={()=>{setShow(!show)}}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show  && <hr />}
//       {show && <ChatRoom roomId={roomId}/>}
      
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'
import ChatRoom from './components/ChatRoom'

function App() {

  const [roomId,setRoomId]=useState('game')
  const [show,setShow] = useState(false)  

  return (
    <div>
      <label>
        choose the chat room : {' '}
        <select value={roomId}
          onChange={(e)=>{setRoomId(e.target.value)}}>
          <option >game</option>
          <option >music</option>
          <option >travel</option>
        </select>
      </label>
      <button onClick={()=>{setShow(!show)}}>
        {show ? 'close chat' : 'open chat'}
      </button>

    {show && <ChatRoom roomId={roomId}/>}

    </div>
  )
}

export default App


// import React, { useEffect, useState } from 'react'

// function App() {
//     const [time,setTime]=useState(1);

//     useEffect(()=>{
//         console.log("mounting......",time)
//         const timer=setInterval(()=>{setTime(time + 1)},1000)

//         return function (){
//             console.log("unmounting ......",time)
//             clearInterval(timer)
//         }

//     },[time])

//   return (
//     <div>
//         <h1>stopwatch:</h1>
//         <p>{time}</p>
//     </div>
//   )
// }

// export default App
















// import React, { useEffect, useState } from 'react'

// function App() {
//   let [time,setTime] = useState(1)
    
//   useEffect(()=>{
//     console.log("adding new interval")
//     const timer=setInterval(()=>{setTime(time + 1)},1000)

//     return function(){
//         console.log("clear old interval")
//         clearInterval(timer);
//     }
//   },[time])
    
  
//   return (
//     <div>
//       <p>{time}</p>
//     </div>
//   )
// }

// export default App











