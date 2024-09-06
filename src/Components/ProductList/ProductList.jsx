import React from 'react'
import "./ProductList.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'


const ProductList = ({ title, products }) => {

    return (
        <div className="plp_section">
            <div className="plp_section_title_container">
                <div className='plp_section_title'>Featured Products</div>
                {/* <div className='plp_section_redirect_link'>See All Products</div> */}
            </div>
            <div className="plp_section_card_container">
                {products.length != 0  && products.map((product) => {
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div>
        </div>
    )
}



export default ProductList