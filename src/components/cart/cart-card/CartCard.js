import React from 'react'
import "./cartcard.css"
function CartCard({name,image,price,location,quantity,handleAddCartItem,handleDeleteCartItem,handleDecreaseCartItem}) {
  // console.log(price);
  return (
    <>
    <div className="cart-card">
      <img src={image}alt="" />
      <div className='card-text'>
        <div className="card-heading">
            <h3>{name}</h3>
            <h3>&#x20B9; {quantity*price}</h3>
        </div>
        <div className="cart-more-text">
            <span>{location}</span>
        </div>
        <div className="cart-qty">
          <button onClick={()=>handleDecreaseCartItem(name)}>-</button>
            {quantity}
          <button onClick={() => handleAddCartItem({name:name})}>+</button>
          <hr />
          <a onClick={()=>handleDeleteCartItem(name)}>Delete</a>
          {/* <hr /> */}
          {/* <a href="#">Share</a> */}
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default CartCard
