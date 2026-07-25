import { createSlice } from "@reduxjs/toolkit";

export const bundleSlice =createSlice({
    name:"bundle",
    initialState:{selectors:[] , openSteps:[1], error:null , loading:true},
    reducers:{
        toggleStep :(state , action)=>{
            state.openSteps.includes(action.payload)?state.openSteps=state.openSteps.filter(s=>s !==action.payload):state.openSteps.push(action.payload) 
        }
     ,incrementQuantity:(state , action)=>{
        
        }
    }
})
export  const {toggleStep , incrementQuantity} =bundleSlice.actions
export default bundleSlice.reducer;