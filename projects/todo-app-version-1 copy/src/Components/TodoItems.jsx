import TodoItem from "./TodoItem";
import css from './TodoItems.module.css';
const TodoItems=({todoItems})=>{
    return <div className={css["text-container"]}>
        {todoItems.map((val)=>(
            <TodoItem key={val.todoName}  todoName1={val.todoName} todoDate1={val.todoDate}></TodoItem>
        ))}
    </div>
}
export default TodoItems;