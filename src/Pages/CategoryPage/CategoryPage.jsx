import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './CategoryPage.css';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    console.log(products)
    
    const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
        console.log(response)
        const data = await response.json();
        setProducts(data);
    };
    useEffect(() => {
        fetchProducts();
    }, [categoryName]);

    return (
        <div className="category-page-container">
            <div className="category-title">{categoryName.toUpperCase()}</div>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
