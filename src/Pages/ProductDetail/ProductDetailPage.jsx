// src/components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import './ProductDetailPage.css';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../Axios/axiosInstance';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import useToast from '../../hooks/toastHook';
import Loading from '../../components/Modal/Loading/Loading'
import ProductList from '../../components/ProductList/ProductList'

const ProductDetails = () => {



  const { showToast } = useToast();
  const { id } = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()



  const handleAddToCartClick = () => {
    dispatch(addToCart(product));
    showToast("Added To Cart Successfully", 'success')
  };

  useEffect(() => {
    const getProduct = async () => {
      try {

        const res = await getSingleProduct(id);
        // console.log(res)

        setProduct(res)
        setIsLoading(false)

        console.log("product here", product)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, []);


  return (
    <div className="product-details-container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="product-image-section">
            <img src={product.images[0]} alt={product.title} className="product-image" />
          </div>
          <div className="product-info-section">
            <div className="product-category">{product.category}</div>
            <div className="product-title">{product.title}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">$ {product.price}</div>
            <div onClick={handleAddToCartClick} className="add-to-cart-button">Add to Cart</div>
          </div>
          {/* <ProductList title={"Recently Viewed"} products={products} /> */}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
