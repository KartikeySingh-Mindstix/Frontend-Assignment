import React from 'react';
import './CartPage.css';
import CartProductCard from "../../components/CartProductCard/CartProductCard"
import { useSelector } from 'react-redux';
const CartPage = () => {
  const {cartItems} = useSelector(state=>state.cart)
  return (
    <div className="cart-page-container">
      {/* Left Section: Cart Items */}
      <div className="cart-items-section">
        {cartItems.map((item, index) =>{
          return <CartProductCard key={`cart_item_${index}`} product={item}/>
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
    </div>
  );
};

export default CartPage;
