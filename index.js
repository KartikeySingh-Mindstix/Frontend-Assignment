import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'; // Use import for ES modules

import reduxLogger from 'redux-logger'

const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'



// Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Buy Cake',
    };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Buy Icecream'
    }
}

console.log("react-redux");

// Reducer Function

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };

        default:
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1,
            };

        default:
            return state;
    }
}

// Store

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer 
})

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() =>
    console.log("Updated state", store.getState())
);

// Dispatching Actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


// Unsubscribe from store
unsubscribe();
