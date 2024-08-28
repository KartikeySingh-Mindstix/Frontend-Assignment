import React from 'react'
import "./ProductList.css"
import { Link } from 'react-router-dom'
const ProductList = ({ products }) => {
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


const ProductCard = ({ product }) => {
    console.log(product.title)
    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-price">${product.price}</p>
        </Link>
    );
};

export default ProductList