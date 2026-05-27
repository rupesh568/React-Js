import css from './AddToDo.module.css';
function AddToDo() {
    return (
        <div class="container text-center">
            <div class={`${css["kg-margin"]} row`}>
                <div class="col-6">
                    <input type="text" placeholder="Enter Todo here" />
                </div>
                <div class="col-4">
                    <input className={`${css.input}`} type="date" />
                </div>
                <div class="col-2">
                    <button className= {` ${css.button} btn btn-success`}type="button" >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddToDo;
