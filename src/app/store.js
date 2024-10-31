import { configureStore } from '@reduxjs/toolkit';
import travelReducer from '../feature/citySlice/travelSlice';

const store = configureStore({
  reducer: {
    travel: travelReducer,
  },
});

export default store;
