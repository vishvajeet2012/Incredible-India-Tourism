import { createSlice } from "@reduxjs/toolkit";
import {cityData} from "../../database for redux/database"
  


const initialState = {
    cities: citiesData
    , };

const dataSlice =createSlice(
    {
        name: 'data',
    }

);

export default dataSlice.reducer
