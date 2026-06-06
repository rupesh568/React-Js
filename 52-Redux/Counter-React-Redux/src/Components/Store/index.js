import { act } from "react";
import {createStore} from "redux";
const INITIAL_VALUE={
    counter:0,
};
const counterReducer=(store=INITIAL_VALUE,action)=>{
    console.log(action);
    let newStore=store;
    if(action.type==="INCREMENT"){
        newStore={counter:newStore.counter+1}
    }else if(action.type==="DECREMENT"){
        newStore={counter:newStore.counter-1}
    }else if(action.type==="ADDITION"){
        newStore={counter:newStore.counter+action.payload.number}

    }else if(action.type==="SUBTRACTION"){
        newStore={counter:newStore.counter-action.payload.number}
    }
    return newStore
}
const counterStore=createStore(counterReducer);

export default counterStore;