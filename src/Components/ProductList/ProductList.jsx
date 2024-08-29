import React from 'react'
import "./ProductList.css"
import { Link } from 'react-router-dom'
const ProductList = ({ products=[] }) => {
    return (
        <div className="plp_section">
            <div className="plp_title">Featured Products</div>
            <div className="card_container">
                {products.length != 0  && products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}


import { useNavigate } from 'react-router-dom'; 
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product_card" onClick={handleCardClick}>
            <img src={product.image} alt={product.title} className="product_image" />
            <div className="product_info">
                <h3 className="product_title">{product.title}</h3>
                <p className="product_category">{product.category}</p>
                <p className="product_price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductList