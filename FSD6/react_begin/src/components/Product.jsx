import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


// [{  id:123,
//     product:"shampoo",
// },]
function Product() {
    const {productId,Qty}=useParams();
    const location=useLocation();
    console.log(location)
    
    function handleButton(){
        alert("cash counter")
    }
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Id : {productId}</p>
      <p>I want : {Qty} packs</p>
      {location.pathname === '/product/321/4'?<button onClick={handleButton}>check out</button>:'byby'}      
      <p>Current path : {location.pathname}</p>
      



    </div>
  )
}

export default Product
