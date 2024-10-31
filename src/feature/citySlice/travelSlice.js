import { createSlice } from '@reduxjs/toolkit';

const travelSlice = createSlice({
  name: 'travel',
  initialState: {
    destinations: []
  },
  reducers: {
    setDestinations: (state, action) => {
      state.destinations = action.payload;
    },
    addDestination: (state, action) => {
      state.destinations.push(action.payload);
    },
    updateDestination: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.destinations.findIndex(dest => dest.id === id);
      if (index !== -1) {
        state.destinations[index] = { ...state.destinations[index], ...updatedData };
      }
    },
    
    removeDestination: (state, action) => {
      state.destinations = state.destinations.filter(dest => dest.id !== action.payload);
    }
  }
});

export const { setDestinations, addDestination, updateDestination, removeDestination } = travelSlice.actions;
export default travelSlice.reducer;
