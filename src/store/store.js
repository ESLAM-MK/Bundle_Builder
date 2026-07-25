import { configureStore } from "@reduxjs/toolkit";
import bundleReducer from "./slices/bundleSlice.js"
const store =configureStore({
    reducer:{
      bundle:bundleReducer
    }
})
export default store