import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'
function Cart() {
  const cart=useContext(CartContext)
  console.log('cart',cart)
  const total = cart.items.reduce((a,b)=> a + b.price,0);
  return (
    <div className='cart'>
      <h1>Cart</h1>
      {cart && cart.items.map((item)=>{
       return(<li>
          {item.name} - ${item.price}
        </li>)
      })}
      <h5>Total Bill : ${total}</h5>
    </div>
  )
}

export default Cart
