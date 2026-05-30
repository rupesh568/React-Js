import {  useState } from "react"
import { createContext } from "react"
import { useReducer } from "react";

export const TODOITEMSCONTEXT=createContext({
    todoItems:[],
    onClick:()=>{},
    onDeletenow:()=>{},
});




const todoitemsReducer=(currtodoItems,action)=>{
    let finalItem=currtodoItems;
    if(action.type=="ADD_ITEM"){
        finalItem=[...currtodoItems,{
            name:action.payload.name,
            date:action.payload.date,
         }];
        

    }else if(action.type=="DELETE_ITEM"){
        finalItem=finalItem.filter((val44)=>{
            return  !(
                val44.name===action.payload.name &&
                val44.date===action.payload.date
            )
        })

    }
    return finalItem;
}


const TODOITEMSCONTEXTPROVIDER=({children})=>{

    const [todoItems,dispatchtodoitems]=useReducer(todoitemsReducer,[]);
        let [newName,setnewName]=useState("");
        const onInput=(e)=>{
            setnewName(e.target.value);
            console.log(newName);
        }
        let [newDate,setnewDate]=useState("");
        const onDate=(e)=>{
            setnewDate(e.target.value);
            console.log(newDate);
        }
        const onClick=({})=>{
            if(newName ==="" || newDate ==="") return;
            const addnewItems={
                type:"ADD_ITEM",
                payload:{
                    name:newName,
                    date:newDate,
                }
            };
            dispatchtodoitems(addnewItems);
    
    
            // if(newName !="" && newDate !=""){
            //     let newItem={
            //     name:newName,
            //     date:newDate,
            // }
            // let finalItem=[...todoItems,newItem];
            // settodoItems(finalItem);
            // event.preventDefault();  /*Form in React Js*/
            console.log("button is clicked");
            setnewName("");
            setnewDate("");
            }
            // let newItem={
            //     name:newName,
            //     date:newDate,
            // }
            // let finalItem=[...todoItems,newItem];
            // settodoItems(finalItem);
            // console.log("button is clicked");
            // setnewName(" ");
            // setnewDate(" ");
            
        
        const onDeletenow=(name3,date3)=>{
            const deleteItems={
                type:"DELETE_ITEM",
                payload:{
                    name:name3,
                    date:date3,
                }
            }
            // let finalItems=todoItems.filter((val44)=>{
            //     return (
            //         val44.name!=name3,
            //         val44.date!=date3
            //     )
            // })
            dispatchtodoitems(deleteItems);
            // settodoItems(finalItems);
            console.log(`delete item named:${name3} and date :${date3}`)
        }
    return <TODOITEMSCONTEXT.Provider value={{
            todoItems,
            onClick,
            onDeletenow,
            newName,
            newDate,
            onDate,
            onInput,


        }}>{children}</TODOITEMSCONTEXT.Provider>
}
export default TODOITEMSCONTEXTPROVIDER;