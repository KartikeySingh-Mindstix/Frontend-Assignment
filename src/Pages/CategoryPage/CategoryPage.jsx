import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './CategoryPage.css';
import Loading from '../../components/Modal/Loading/Loading';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { getProductsByCategory } from '../../Axios/axiosInstance';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [sortOption, setSortOption] = useState('');
    const [minPrice, setMinPrice] = useState('');  // New state for minimum price
    const [maxPrice, setMaxPrice] = useState('');  // New state for maximum price

    const sortingOptions = [
        { value: "price-asc", label: "Price: Low To High" },
        { value: "price-desc", label: "Price: High To Low" },
        { value: "rating-desc", label: "Rating: High To Low" }
    ];

    const getFilteredProducts = () => {
        let filteredProducts = [...products];


        if (ratingFilter > 0) {
            filteredProducts = filteredProducts.filter(product => product.rating >= ratingFilter);
        }

        if (minPrice !== '' || maxPrice !== '') {
            filteredProducts = filteredProducts.filter(product => {
                const price = product.price;
                if (minPrice !== '' && price < minPrice) return false;
                if (maxPrice !== '' && price > maxPrice) return false;
                return true;
            });
        }

        if (sortOption) {
            filteredProducts.sort((a, b) => {
                if (sortOption === 'price-asc') return a.price - b.price;
                if (sortOption === 'price-desc') return b.price - a.price;
                if (sortOption === 'rating-desc') return b.rating - a.rating;
                return 0;
            });
        }

        return filteredProducts;
    };

    const filteredProducts = getFilteredProducts();

    // Fetch products based on category
    const fetchProducts = async () => {
        try {
            const data = await getProductsByCategory(categoryName);
            setProducts(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [categoryName]);

    return (
        <div className="category-page-container">
            {isLoading && <Loading />}
            <div className="category-title">{categoryName.toUpperCase()}</div>
            <div className="content-grid">
                {/* Filter Section */}
                <div className="filter-section">
                    <h3>Filters</h3>
                    {/* Rating Filter */}
                    <div className="rating-filter-section">
                        <Accordion title="Ratings">
                            <div className="rating-options">
                                {[1, 2, 3, 4].map(rating => (
                                    <div key={rating} className="rating-option">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={rating}
                                            checked={ratingFilter === rating}
                                            onChange={() => setRatingFilter(rating)}
                                        />
                                        <label onClick={() => setRatingFilter(rating)}>{rating} Stars & Up</label>
                                    </div>
                                ))}
                            </div>
                        </Accordion>
                    </div>
                    {/* Sort Filter */}
                    <div className="sort-filter-section">
                        <Accordion title="Sort By">
                            {sortingOptions.map((option, index) => (
                                <div key={index} className="sort-option">
                                    <input
                                        type="radio"
                                        name="sort"
                                        value={option.value}
                                        checked={sortOption === option.value}
                                        onChange={() => setSortOption(option.value)}
                                    />
                                    <label onClick={() => setSortOption(option.value)}>{option.label}</label>
                                </div>
                            ))}
                        </Accordion>
                    </div>
                    {/* Price Filter */}
                    <div className="price-filter-section">
                        <Accordion title="Price Range">
                            <div className="price-inputs">
                                <input
                                    type="number"
                                    placeholder="Min Price"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="price-input"
                                />
                                <input
                                    type="number"
                                    placeholder="Max Price"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="price-input"
                                />
                            </div>
                        </Accordion>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-container">
            <div className="accordion-header" onClick={onToggle}>
                <div className="accordion-header-title">{title}</div>
                <div className={`accordion-toggle-symbol ${isOpen ? 'rotate' : ''}`}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </div>
            </div>
            {isOpen && (<div className={`accordion-content ${isOpen ? 'open' : 'closed'}`}>
                {children}
            </div>)}
        </div>
    );
};


export default CategoryPage;
