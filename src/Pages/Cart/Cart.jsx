import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import CartProductCard1 from '../../Components/CartCard/CartProductCard';
import CartProductCard2 from '../../Components/CartProductCard/CartProductCard';
import "./Cart.css"
const Cart = () => {
  return (
    <div className='cart-container'>
      <CartProductCard1 />
      <CartProductCard2 />
      {/* <div className="empty-cart-container">
        <FaShoppingCart className="empty-cart-icon" />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven&apos;t added anything to your cart yet.</p>
      </div> */}
    </div>
  )
}

export default Cart