import React, {useState, useEffect} from 'react';
import "./Home.css"
import { getLimitedProducts } from '../../Axios/axiosInstance';
import Banner from '../../Components/Banner/Banner';
import ProductList from '../../Components/ProductList/ProductList';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('inside home.js')
        const fetchProducts = async () => {
            try {
                const productsData = await getLimitedProducts(8); 
                console.log('Fetched Products:', productsData);
                setProducts(productsData);
               
            } catch (err) {
                console.log(err)
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <Banner />
            <ProductList products={products} />
        </div>
    );
};




export default Home;
