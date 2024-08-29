// src/components/ProductDetails.js
import React, {useState, useEffect} from 'react';
import './ProductDetailPage.css';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../Axios/axiosInstance';
const ProductDetails = () => {
  
  const {id} = useParams();
  const [product, setProduct] = useState({})

  useEffect(()=>{
    const getProduct= async ()=>{
      try {
        const res = await getSingleProduct(id);
        setProduct(res)
        console.log(product)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, []);


  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info-section">
        <h2 className="product-category">{product.category}</h2>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price}</div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
