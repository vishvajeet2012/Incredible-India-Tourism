import dataReducer from "../features/tourismRed/tourims";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer:{
      data: dataReducer
    }
})