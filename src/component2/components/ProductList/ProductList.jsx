import React from 'react'
import "./ProductList.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'


const ProductList = ({ title, products }) => {

    return (
        <div className="plp_section">
            <div className="plp_title_container">Featured Products</div>
            <div className="card_container">
                {products.length != 0  && products.map((product) => {
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div>
        </div>
    )
}



export default ProductList