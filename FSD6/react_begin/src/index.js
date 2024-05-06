import React from "react";
import ReactDOM from "react-dom";
import ZomatoCard from "./components/ZomatoCard";


// function Card(props){
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.desc}</p>
//     </div>
//   )
// }

// const books=['Harry Potter','Marvel Comics','Ramayan']

// function App(){
//   return (
//     <div>
//       {books.map((book)=>{
//         return <Card title={book} key={book} desc={"Available!!!"}/>
//       })}


      
//     </div>
//   )
// }




function App() {
  
  return (
  <div>

    <ZomatoCard />
    
  </div>
  )
}




let rootEl = document.getElementById("root");

ReactDOM.render(<App/>, rootEl);
