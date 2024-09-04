import React, {useState, useEffect, useRef} from 'react';
import "./Home.css"
import { getLimitedProducts } from '../../Axios/axiosInstance';
import Banner from '../../Components/Banner/Banner';
import ProductList from '../../Components/ProductList/ProductList';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getLimitedProducts(11); 
                console.log('Fetched Products:', productsData);
                setProducts(productsData);
               
            } catch (err) {
                console.log(err)
            }
        };

        fetchProducts();
    }, []);
    
    const handleScrollOnClick = ()=>{
        const headerHeight = document.querySelector('.header_main').offsetHeight
        const scrollHeight = document.querySelector('.plp_section').offsetTop
        console.log(headerHeight, scrollHeight)
        window.scrollTo({ top: (scrollHeight - headerHeight), behavior: "smooth" })
    }

    return (
        <div>
            <Banner clickHandler={handleScrollOnClick} />
            <div><ProductList products={products} /></div>
        </div>
    );
};




export default Home;
