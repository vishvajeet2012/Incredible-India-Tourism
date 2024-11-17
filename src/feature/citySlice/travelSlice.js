import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    addDestination: (state, action) => {
      const findIndex = state.destinations.findIndex(
        (value) => value.id === action.payload.id
      );

      if (findIndex === -1) {
    
        state.destinations.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
    
        state.destinations[findIndex].quantity += 1;
      }
    },
    deleteDestination: (state, action) => {

      state.destinations = state.destinations.filter(
        (value) => value.id !== action.payload.id
      );
    },
    totalCart: (state) => {
      console.warn( state.destinations);
      const totals = state.destinations.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
            console.log(cartItem)
          const itemTotal = parseInt(price) * parseInt(quantity);
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        { totalPrice: 0, totalQuantity: 0 } 
      );

      state.totalPrice = totals.totalPrice;
      state.totalQuantity = totals.totalQuantity;
    },
  },
});

export const { addDestination, deleteDestination, totalCart } = travelSlice.actions;


export default travelSlice.reducer;
