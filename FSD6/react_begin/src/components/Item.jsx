import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cart";
function Item(props) {
  const cart = useContext(CartContext);
  
  return (
    <div className="Item-card">
      <h4>{props.name}</h4>
      <p>Price : {props.price}</p>
      <button onClick={() => {cart.setItems([...cart.items,{ name: props.name, price: props.price },
          ]);
        }}>
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
