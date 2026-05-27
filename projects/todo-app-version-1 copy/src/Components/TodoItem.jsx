
import css from './TodoItem.module.css';
function TodoItem({todoName1,todoDate1}) {
    
    return (
        <div class="container">
            <div class={`${css["kg-margin"]} row`}>
                <div class="col-6">{todoName1}</div>
                <div class="col-4">{todoDate1}</div>
                <div class="col-2">
                    <button type="button" class={`${css.button} btn btn-danger`}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default TodoItem;
