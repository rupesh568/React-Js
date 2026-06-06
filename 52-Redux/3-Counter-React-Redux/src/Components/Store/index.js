import { act } from "react";
import {createStore} from "redux";
const INITIAL_VALUE={
    counter:0,
    privacy:false,
};
const counterReducer=(store=INITIAL_VALUE,action)=>{
    console.log(action);
    let newStore=store;
    if(action.type==="INCREMENT"){
        newStore={...newStore,counter:newStore.counter+1}
    }else if(action.type==="DECREMENT"){
        newStore={counter:newStore.counter-1}
    }else if(action.type==="ADDITION"){
        newStore={...newStore,counter:newStore.counter+action.payload.number}

    }else if(action.type==="SUBTRACTION"){
        newStore={...newStore,counter:newStore.counter-action.payload.number}
    }else if(action.type==="PRIVACYTOGGLE"){
        newStore={...newStore,privacy:!newStore.privacy}
    }
    return newStore
}
const counterStore=createStore(counterReducer);

export default counterStore;