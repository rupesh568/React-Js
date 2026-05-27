import Appname from "./Components/Appname";
import AddToDo from "./Components/AddToDo";


import "./App.css";
import TodoItems from "./Components/TodoItems";
import ErrorMessage from "./Components/ErrorMessage";
function App() {
    let todoItems=[
        {
            todoName:"Buy Milk",
            todoDate:"4/10/2025",
        },
        {
            todoName:"Go to college",
            todoDate:"5/12/2026",
        },
        {
            todoName:"Cook Food",
            todoDate:"04/04/2023",
        }
    ]
    return (
        <center className="todo-container">
            <Appname/>
            <AddToDo/>
            <ErrorMessage todoItems={todoItems}></ErrorMessage>
            <TodoItems todoItems={todoItems}></TodoItems>
        </center>
    );
}
export default App;
