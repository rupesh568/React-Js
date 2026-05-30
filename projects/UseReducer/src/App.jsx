import Appname from "./Components/Appname";
import AddToDo from "./Components/AddToDo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState ,useReducer} from "react";
import { use } from "react";
import ErrorMessage from "./Components/ErrorMessage";

import TODOITEMSCONTEXTPROVIDER from "./Store/ITEMS";
// const todoitemsReducer=(currtodoItems,action)=>{
//     let finalItem=currtodoItems;
//     if(action.type=="ADD_ITEM"){
//         finalItem=[...currtodoItems,{
//             name:action.payload.name,
//             date:action.payload.date,
//          }];
        

//     }else if(action.type=="DELETE_ITEM"){
//         finalItem=finalItem.filter((val44)=>{
//             return  !(
//                 val44.name===action.payload.name &&
//                 val44.date===action.payload.date
//             )
//         })

//     }
//     return finalItem;
// }


function App() {
    // let todoItems = [
    //     {
    //         name: "Buy Milk",
    //         date: "4/12/2025",
    //     },
    //     {
    //         name:"Go to College",
    //         date:"9/12/2024"
    //     },
    //     {
    //         name:"Study NOW",
    //         date:"1/12/2023"
    //     }
    // ];
    // let [todoItems,settodoItems]=useState(

    //     [
    //     {
    //         name: "Buy Milk",
    //         date: "4/12/2025",
    //     },
    //     {
    //         name:"Go to College",
    //         date:"9/12/2024"
    //     },
    //     {
    //         name:"Study NOW",
    //         date:"1/12/2023"
    //     }
    // ]
    // )

    // const [todoItems,dispatchtodoitems]=useReducer(todoitemsReducer,[]);
    // let [newName,setnewName]=useState("");
    // const onInput=(e)=>{
    //     setnewName(e.target.value);
    //     console.log(newName);
    // }
    // let [newDate,setnewDate]=useState("");
    // const onDate=(e)=>{
    //     setnewDate(e.target.value);
    //     console.log(newDate);
    // }
    // const onClick=({})=>{
    //     if(newName ==="" || newDate ==="") return;
    //     const addnewItems={
    //         type:"ADD_ITEM",
    //         payload:{
    //             name:newName,
    //             date:newDate,
    //         }
    //     };
    //     dispatchtodoitems(addnewItems);


    //     // if(newName !="" && newDate !=""){
    //     //     let newItem={
    //     //     name:newName,
    //     //     date:newDate,
    //     // }
    //     // let finalItem=[...todoItems,newItem];
    //     // settodoItems(finalItem);
    //     // event.preventDefault();  /*Form in React Js*/
    //     console.log("button is clicked");
    //     setnewName("");
    //     setnewDate("");
    //     }
    //     // let newItem={
    //     //     name:newName,
    //     //     date:newDate,
    //     // }
    //     // let finalItem=[...todoItems,newItem];
    //     // settodoItems(finalItem);
    //     // console.log("button is clicked");
    //     // setnewName(" ");
    //     // setnewDate(" ");
        
    
    // const onDeletenow=(name3,date3)=>{
    //     const deleteItems={
    //         type:"DELETE_ITEM",
    //         payload:{
    //             name:name3,
    //             date:date3,
    //         }
    //     }
    //     // let finalItems=todoItems.filter((val44)=>{
    //     //     return (
    //     //         val44.name!=name3,
    //     //         val44.date!=date3
    //     //     )
    //     // })
    //     dispatchtodoitems(deleteItems);
    //     // settodoItems(finalItems);
    //     console.log(`delete item named:${name3} and date :${date3}`)
    // }

    // // const defaultVal=[{
    // //     name:"cook food",
    // //     date:"03/12/2024",
    // // }];


    return (
        <TODOITEMSCONTEXTPROVIDER>
            <center className="todo-container">
                <Appname />
                <AddToDo
                    
                ></AddToDo>
                <ErrorMessage></ErrorMessage>
                <TodoItems
                    
                ></TodoItems>
            </center>
        </TODOITEMSCONTEXTPROVIDER>
    );
}
export default App;
