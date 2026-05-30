import css from  './ErrorMessage.module.css'
import {TODOITEMSCONTEXT} from "../Store/ITEMS";
import { useContext } from 'react';
const ErrorMessage=()=>{

    const value=useContext(TODOITEMSCONTEXT);
    let todoItems1=value.todoItems;
    return <>
        {todoItems1.length==0 && <h2 className={`${css.h2}`}>Enjoy Your Day</h2>}
    </>
}
export default ErrorMessage;