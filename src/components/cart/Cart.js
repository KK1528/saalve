import React, { useEffect } from 'react'
import "./cart.css"
import CartCard from './cart-card/CartCard'
import Search from '../search/Search'
import { Link } from 'react-router-dom';


export default function Cart({ cartItems, handleDeleteAllCart, handleAddCartItem, handleDeleteCartItem, handleDecreaseCartItem }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const orderItems = cartItems;
  var money = 0;
  function createCartCard(datas) {
    money += datas.price * datas.quantity;
    return (
      <CartCard name={datas.name} image={datas.image} price={datas.price} location={datas.location} quantity={datas.quantity} handleAddCartItem={handleAddCartItem} handleDeleteCartItem={handleDeleteCartItem} handleDecreaseCartItem={handleDecreaseCartItem} />

    );
  }
  return (
    <>
      {/* <Search/> */}
      <div className='cart'>
        <div className="food-cart">
          <h1 >Food Cart</h1>
          <div className="cart-price">
            <a onClick={handleDeleteAllCart}>Delete all</a>
            <span class Name='cart-price'>Price</span>
          </div>
          <hr />
          {orderItems.map(createCartCard)}
          {cartItems.length === 0 ? <div style={{ margin: "2rem 0rem", fontSize: "1.3rem" }}>Add Items to the cart</div> :
            <div className="cart-order">
              <Link className='button' to="/bill" style={{ color: "white", paddingTop: "10px" }} >Proceed to Buy</Link>
              <div>
                <h4 className='subtotal'>Tax (5%) :   &#x20B9; {Math.round(0.05 * money*100)/100}</h4>
                <h3 className='subtotal'>Subtotal :   &#x20B9; {Math.round(1.05 * money*100)/100}</h3>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
