import React from 'react';
import './CartPage.css';
import CartProductCard from "../../components/CartProductCard/CartProductCard"
import { useSelector } from 'react-redux';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
const CartPage = () => {
  const { cartItems } = useSelector(state => state.cart)
  return (
    <>
      {cartItems.length > 0 ? (<div className="cart-page-container">
        {/* Left Section: Cart Items */}
        <div className="cart-items-section">
          {cartItems.map((item, index) => {
            return <CartProductCard key={`cart_item_${index}`} product={item} />
          })}
        </div>

        {/* Right Section: Checkout Summary */}
        <div className="checkout-summary-section">
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>₹ 29997</span>
            </div>
            <div className="summary-item">
              <span>Discount:</span>
              <span>₹ 999</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>₹ 29000</span>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      </div>) : (<div className='empty-cart-container'>
        <TiShoppingCart className="empty-cart-icon" />
        <div className="empty-cart-title">Your Cart is Empty</div>
        <Link to="/"><div className="empty-cart-button">Home</div></Link>
      </div>)}
    </>

  );
};

export default CartPage;
