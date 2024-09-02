import { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from './cartTypes';


const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
            };
        }
        case REMOVE_FROM_CART:{
            const existingItem = state.cartItems.filter((item)=>item.id !== action.payload)
            return {
                ...state,
                cartItems: existingItem
            }
        }
        case INCREMENT_QUANTITY:{
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        }
        case DECREMENT_QUANTITY:{
            const updatedCart = state.cartItems.map(item=>{
                return item.id === action.payload ? {...item, quantity: item.quantity - 1} : item
            }).filter(item => item.quantity > 0)

            return {
                ...state,
                cartItems: updatedCart
            }
        }

        default:
            return state;
    }
};

export default cartReducer;









// case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== action.payload),
//       };