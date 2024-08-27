import React from 'react';
import "./Home.css"
const Home = () => {
    const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports'];    
    return (
        <div>
            <div className="banner">
                <h1>Welcome to Our Store</h1>
                <p>Find the best products that suit your needs</p>
                <button>Shop Now</button>
            </div>
        </div>
    );
};

export default Home;
