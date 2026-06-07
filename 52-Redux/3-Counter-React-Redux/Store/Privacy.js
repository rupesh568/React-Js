import { createSlice } from "@reduxjs/toolkit";

const counterPrivacy=createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toggle:(state,action)=>{
          return  state=!state;
        }
    }
})
export default counterPrivacy;
export const privacyAction=counterPrivacy.actions;