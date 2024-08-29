// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { headerSlice } from './Features/Header/headerSlice';
import { cartSlice } from './Features/Cart/cartSlice';
export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    cart: cartSlice.reducer
  },
});
