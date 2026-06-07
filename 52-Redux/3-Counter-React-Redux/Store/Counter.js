import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
            state.counterVal++;
        
        },
        decrement:(state)=>{
            state.counterVal--;
        },
        addition:(state,action)=>{
            state.counterVal+=action.payload;
            // console.log(state,action);
        },
        substraction:(state,action)=>{
            state.counterVal-=action.payload;
            console.log(state,action);
        },
    }
})
export default counterSlice;
export const counterActions=counterSlice.actions;
