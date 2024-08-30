// CartProductCard.jsx
import React, { useState } from 'react';
import './CartProductCard.css';
import { FaTrashAlt, FaHeart, FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons from FontAwesome

const CartProductCard = () => {
  // Mock Data
  const product = {
    id: 1,
    name: 'Jordan Nu Retro 1 Low',
    category: "Men's Shoes",
    description: 'Black/White/Football Grey/University Red...',
    price: 69896.0,
    originalPrice: 73560.0,
    quantity: 1,
    stockStatus: 'Limited Stock', // New property for stock status
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', // Larger placeholder image URL
  };

  const [quantity, setQuantity] = useState(product.quantity);
  const [isWishlist, setIsWishlist] = useState(false); // State to handle wishlist

  // Handle incrementing the quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Handle decrementing the quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle adding/removing from wishlist
  const handleWishlistToggle = () => {
    setIsWishlist(!isWishlist);
  };

  // Handle removing the product (for design purposes, we just log it)
  const handleRemove = () => {
    console.log(`Remove product with id: ${product.id}`);
  };

  return (
    <div className="cart-product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {/* Stock Status Chip */}
        <span className={`stock-chip ${product.stockStatus.replace(' ', '-').toLowerCase()}`}>
          {product.stockStatus}
        </span>
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
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
      <div className="product-pricing-actions">
        <div className="product-pricing">
          <p className="original-price">MRP: ₹ {product.originalPrice.toFixed(2)}</p>
          <p className="current-price">₹ {product.price.toFixed(2)}</p>
        </div>
        <div className="product-actions">
          <button onClick={handleWishlistToggle} className={`wishlist-btn ${isWishlist ? 'active' : ''}`}>
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
