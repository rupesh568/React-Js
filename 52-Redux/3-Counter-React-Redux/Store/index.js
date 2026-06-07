import { act } from "react";
import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

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

const counterPrivacy=createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toggle:(state,action)=>{
          return  state=!state;
        }
    }
})


const counterStore=configureStore({reducer:{
    counter:counterSlice.reducer,
    privacy:counterPrivacy.reducer,
}});
export const counterActions=counterSlice.actions;
export const privacyAction=counterPrivacy.actions;
export default counterStore;

// const counterReducer=(store=INITIAL_VALUE,action)=>{
//     console.log(action);
//     let newStore=store;
//     if(action.type==="INCREMENT"){
//         newStore={...newStore,counter:newStore.counter+1}
//     }else if(action.type==="DECREMENT"){
//         newStore={counter:newStore.counter-1}
//     }else if(action.type==="ADDITION"){
//         newStore={...newStore,counter:newStore.counter+action.payload.number}

//     }else if(action.type==="SUBTRACTION"){
//         newStore={...newStore,counter:newStore.counter-action.payload.number}
//     }else if(action.type==="PRIVACYTOGGLE"){
//         newStore={...newStore,privacy:!newStore.privacy}
//     }
//     return newStore
// }

// const INITIAL_VALUE={
//     counter:0,
//     privacy:false,
// };
