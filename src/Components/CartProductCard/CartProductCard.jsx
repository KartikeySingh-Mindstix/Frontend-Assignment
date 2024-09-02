import React from 'react'
import './CartProductCard.css'
import { FaTrashAlt, FaHeart, FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cart/cartActions';
import useToast from '../../hooks/toastHook';

const CartProductCard = ({product}) => {

  const {showToast} = useToast();

  const dispatch = useDispatch();
  const handleIncrement = () =>{
    dispatch(incrementQuantity(product.id))
    showToast("Added to cart successfully", "success");
  }

  const handleDecrement = () =>{
    dispatch(decrementQuantity(product.id))
    showToast("Removed from cart successfully", "success");
  }

  const handleRemoveCart = () =>{
    dispatch(removeFromCart(product.id))
    showToast("Removed to cart successfully", "success");
  }

  return (
    <div className="cart-card-container">
      {/* Left Section */}
      <div className="cart-card-left-section">
        <div className='cart-card-prd-image-container'>
          <img src={product.image} className='cart-card-prd-image' />
        </div>
      </div>
      {/* card-middle-section */}
      <div className="cart-card-middle-section">
        <div className="cart-card-prd-name">{product.title}</div>
        <div className="cart-card-prd-category">{product.category}</div>
        {/* <div className="cart-card-prd-description">Lorem ipsum dolorviddafd  daf dfs sdf sdf ent sadf dfas nihil.</div> */}
        <div className="cart-card-prd-stock-status">Quantity: {product.quantity}</div>
        <div className="cart-card-prd-quantity-ctrl">
          <div onClick={handleDecrement} className="cart-card-quantity-btn"><FaMinus /></div>
          <div className='cart-card-prd-quantity'>{product.quantity}</div>
          <div onClick={handleIncrement} className="cart-card-quantity-btn"><FaPlus /></div>
        </div>
      </div>
      {/* Right Section */}
      <div className="cart-card-right-section">
        <div className="cart-card-prd-pricing">
          <div className="cart-card-prd-pricing-original">MRP: ₹ {product.price}</div>
          <div className="cart-card-prd-pricing-current">₹ {product.price}</div>
        </div>
        <div className="cart-card-prd-actions">
          <div className="cart-wishlist-btn"><FaHeart /></div>
          <div onClick={handleRemoveCart} className="cart-remove-btn"><FaTrashAlt /></div>
        </div>
      </div>
    </div>

  )
}

export default CartProductCard