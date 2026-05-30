import { useContext } from "react";
import css from "./TodoItem.module.css"
import {TODOITEMSCONTEXT} from "../Store/ITEMS";

function TodoItem({todoName, todoDate}) {
    const {onDeletenow}=useContext(TODOITEMSCONTEXT);
    return (
        <div className="container">
            <div className={`${css["kg-margin"]} row`}>
                <div className="col-6" >{todoName}</div>
                <div className="col-4" >{todoDate}</div>
                <div className="col-2">
                    <button type="button" className={`${css.button} btn btn-danger`}
                    onClick={()=>{
                        onDeletenow(todoName,todoDate)
                    }}
                    >
                        
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default TodoItem;
