// CartProductCard.jsx
import React, { useState } from 'react';
import './CartProductCard.css';
import { FaTrashAlt, FaHeart, FaPlus, FaMinus } from 'react-icons/fa';

const CartProductCard = () => {
  // Mock Data
  const product = {
    id: 1,
    name: 'Jordan Nu Retro 1 Low',
    category: "Men's Shoes",
    description: 'Black White Football Grey University Red adf dasf sfa ads',
    price: 69896.0,
    originalPrice: 73560.0,
    quantity: 1,
    stockStatus: 'Limited Stock',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  };

  const [quantity, setQuantity] = useState(product.quantity);

 
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemove = () => {
    console.log(`Remove product with id: ${product.id}`);
  };

  return (
    <div className="cart-card--container">
      <div className="cart-product-image">
        <img src={product.image} alt={product.name} />
        {/* Stock Status Chip */}
        {/* <span className={`stock-chip ${product.stockStatus.replace(' ', '-').toLowerCase()}`}>
          {product.stockStatus}
        </span> */}
      </div>
      <div className="cart-product-details">
        <h3 className="cart-product-name">{product.name}</h3>
        <p className="cart-product-category">{product.category}</p>
        <p className="cart-product-description">{product.description}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement} className="quantity-btn">
            <FaMinus />
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrement} className="quantity-btn">
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="cart-product-pricing-actions">
        <div className="cart-product-pricing">
          <p className="cart-product-original-price">MRP: ₹ {product.originalPrice.toFixed(2)}</p>
          <p className="cart-product-current-price">₹ {product.price.toFixed(2)}</p>
        </div>
        <div className="cart-product-actions">
          <button  className={`wishlist-btn active`}>
            <FaHeart />
          </button>
          <button onClick={handleRemove} className="remove-btn">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
