
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';
const store = configureStore({
   reducer : counterReducer,
  });
  export{store}