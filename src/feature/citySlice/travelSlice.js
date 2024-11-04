import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';


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
                    ...action.payload, 
                    quantity: 1 
                });
            } else {
               
                state.destinations[find].quantity += 1; 
            }
                    
        

        },
        deleteDestination:(state , action) =>{
            state.destinations = state.destinations.filter((value) => value.id !==action.payload.id)
        },
 
        totalCart:(state)=>{
            const{totalQuantity, totalPrice} =  state.destinations
        }
         
    }   


})





export const { addDestination, setDestinations ,deleteDestination} = travelSlice.actions;

// Export the reducer
export default travelSlice.reducer;