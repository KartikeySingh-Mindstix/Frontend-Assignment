import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './SearchPage.css';
import Loading from '../../components/Modal/Loading/Loading';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { getLimitedProducts } from '../../Axios/axiosInstance';

const SearchPage = () => {
    const location = useLocation()

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


    const filterProductsByQuery = (products, query) => {
        if (!query) return products;

        return products.filter((product) => {
            const lowerCaseQuery = query.toLowerCase();
            return (
                product.title.toLowerCase().includes(lowerCaseQuery) ||  
                product.category.toLowerCase().includes(lowerCaseQuery) ||  
                product.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
            );
        });
    };



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
            const data = await getLimitedProducts(190);
            setProducts(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };


    const getQueryParams = () => {
        const searchParams = new URLSearchParams(location.search); // Parse the query string
        const query = searchParams.get('q'); // Extract the 'q' parameter
        return { query };
    };

    useEffect(() => {
        const {query} = getQueryParams();
        console.log(query)
        fetchProducts();
    }, [location.search]);

    return (
        <div className="search-page-container">
            {isLoading && <Loading />}
            <div className="search-page-title">Search results</div>
            <div className="search-page-content-grid">
                {/* Filter Section */}
                <div className="search-page-filter-section">
                    {/* Rating Filter */}

                    <h3>Filters</h3>
                    <div className="search-page-rating-filter-section">
                        <SearchAccordion title="Ratings">
                            <div className="search-page-rating-options">
                                {[1, 2, 3, 4].map(rating => (
                                    <div key={rating} className="search-page-rating-option">
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
                        </SearchAccordion>
                    </div>
                    {/* Sort Filter */}
                    <div className="search-page-sort-filter-section">
                        <SearchAccordion title="Sort By">
                            {
                                sortingOptions.map((option, index) =>
                                    <div key={index} className="search-page-sort-option">
                                        <input
                                            type="radio"
                                            name="sort"
                                            value={option.value}
                                            checked={sortOption === option.value}
                                            onChange={() => setSortOption(option.value)}
                                        />
                                        <label onClick={() => setSortOption(option.value)}>{option.label}</label>
                                    </div>
                                )}
                        </SearchAccordion>
                    </div>
                    {/* Price Filter */}
                    <div className="search-page-price-filter-section">
                        <SearchAccordion title="Price Range">
                            <div className="search-page-price-inputs">
                                <input
                                    type="number"
                                    placeholder="Min Price"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="search-page-price-input"
                                />
                                <input
                                    type="number"
                                    placeholder="Max Price"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="search-page-price-input"
                                />
                            </div>
                        </SearchAccordion>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="search-page-products-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SearchAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="search-page-accordion-container">
            <div className="search-page-accordion-header" onClick={onToggle}>
                <div className='search-page-accordion-header-title'>{title}</div>
                <div className='search-page-accordion-toggle-symbol'>{isOpen ? (<FaMinus />) : (<FaPlus />)}</div>
            </div>
            {isOpen && <div className="search-page-accordion-content">{children}</div>}
        </div>
    );
};

export default SearchPage;
