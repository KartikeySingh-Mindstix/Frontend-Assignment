import { combineReducers } from 'redux';
import headerReducer from './header/headerReducer';
import cartReducer from './cart/cartReducer'
import toastReducer from './toast/toastReducer';

const rootReducer = combineReducers({
   header: headerReducer,
   cart: cartReducer,
   toast: toastReducer
})

export default rootReducer