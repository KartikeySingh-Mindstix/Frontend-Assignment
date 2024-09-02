import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon from react-icons
import './CartIcon.css'; // Import the CSS file
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CartIcon = () => {
  const {cartItems} = useSelector(state=>state.cart)
  const cartCount = cartItems.reduce((total, item)=>{
    return item.quantity + total
  },0)
  return (
    <div className="cart-icon-container">
      <Link to="/cart"><FaShoppingCart size={24} /></Link>
      {cartCount > 0 && ( 
        <span className="cart-item-count">{cartCount}</span>
      )}
    </div>
  );
};

export default CartIcon;
