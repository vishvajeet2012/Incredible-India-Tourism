import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  destinations:[],
  totalPrice: 0,
  totalQuantity:0
}


export const travelSlice = createSlice({
    name: 'travel',
    initialState,
    reducers:{
        addDestination:(state,action) =>{
            const find =state.destinations.findIndex((value) =>value.id===action.payload.id)

            if (find === -1) {
                // If not found, add the destination to the array
                state.destinations.push({
                    ...action.payload, // Ensure you add the full destination object
                    quantity: 1 // If you're tracking quantities, you might want to initialize this
                });
            } else {
                // If found, you can update the quantity or other properties
                state.destinations[find].quantity += 1; // For example, incrementing the quantity
            }
                    


        },
 
        setDestinations:(state,action) =>{}

        
    }   


})





export const { addDestination, setDestinations } = travelSlice.actions;

// Export the reducer
export default travelSlice.reducer;