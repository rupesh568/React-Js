import { useContext } from "react";
import TodoItem from "./TodoItem";
import css from './TodoItems.module.css';
import {TODOITEMSCONTEXT} from "../Store/ITEMS";
const TodoItems = () => {

    
    const {todoItems}=useContext(TODOITEMSCONTEXT);
    
    
    
    return (
        <div className={`${css["text-container"]}`}>
            {todoItems.map((val)=>(
                <TodoItem key={val.name} 
                todoName={val.name} 
                todoDate={val.date}

                ></TodoItem>
            ))}
        </div>
    );
};
export default TodoItems;
