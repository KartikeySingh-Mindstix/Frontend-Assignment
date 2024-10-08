import React from 'react'
import "./Banner.css"

const Banner = ({clickHandler}) => {
    
    return (
        <div className="banner">
            <h1>Welcome to Our Store</h1>
            <p>Find the best products that suit your needs</p>
            <button onClick={clickHandler}>Shop Now</button>
        </div>
    )
}

export default Banner