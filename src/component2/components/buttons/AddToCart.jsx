import React from 'react'

const AddToCart = ({title, action}) => {
  return (
    <div onClick={handleAddToCartClick} className="add-to-cart-button">Add to Cart</div>
  )
}

export default AddToCart