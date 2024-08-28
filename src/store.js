// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { headerSlice } from './Features/Header/headerSlice';

export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
  },
});
