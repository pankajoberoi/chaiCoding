import React from 'react'

// props

function Card(props){
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

const books=['Harry Potter','Marvel Comics','Ramayan']

function Cards(){
  return (
    <div>
      {books.map((book)=>{
        return <Card title={book} key={book} desc={"Available!!!"}/>
      })}
    </div>
  )
}

export default Cards
