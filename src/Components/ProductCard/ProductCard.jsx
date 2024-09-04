import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cart/cartActions';
import useToast from '../../hooks/toastHook';
const ProductCard = ({ product}) => {
    const {showToast} = useToast()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddToCart = ()=>{
        dispatch(addToCart(product));
        showToast(`Added To Cart Successfully`, 'success')
    }

    const openPDP = ()=>{
        navigate("/product/"+product.id)
    }

  return (
    <div className="card-product-card">
      <div className="product-card-image-container">
        <img src={product.image} className='product-card-image' />
      </div>
      <div className="product-card-bottom">
        <div className='product-card-details'>
          <div className="product-card-category">{product.category}</div>
          <div onClick={openPDP}className='product-card-title'>{product.title}</div>
          <div className="product-card-price-container">
            <div className="product-card-price--original">MRP <del>Rs. {product.price}</del></div>
            <div className="product-card-price--current">Rs. {product.price}</div>
          </div>
        </div>
        <div onClick={handleAddToCart}className='product-atc-btn'>Add To Cart</div>
      </div>
    </div>
  );
};

export default ProductCard;
