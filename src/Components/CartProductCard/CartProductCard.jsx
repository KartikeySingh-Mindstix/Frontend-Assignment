import React from 'react'
import './CartProductCard.css'
import { AiOutlinePlus } from "react-icons/ai";
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
const CartProductCard = () => {
  return (
      <div className="card-container">
        {/* Left Section */}
        <div className="card-left-section">
          <div className='card-prd-image-container'>
            <img src={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} className='card-prd-image' />
          </div>
        </div>
        {/* card-middle-section */}
        <div className="card-middle-section">
          <div className="card-prd-name">Lukme</div>
          <div className="card-prd-description">Lorem ipsum dolor sVeuatur praores obcat, sint, provident nihil.</div>
          <div className="card-prd-stock-status">In stock</div>
          <div className="card-prd-quantity">
            <div className="card-quantity-btn"><FaPlus /></div>
            <div>1</div>
            <div className="card-quantity-btn"><FaMinus /></div>
          </div>
        </div>
        {/* Right Section */}
        <div className="card-right-section">
          <div className="card-prd-subtotal">10000</div>
          <div className="remove-btn">Remove</div>
        </div>
      </div>
    
  )
}

export default CartProductCard