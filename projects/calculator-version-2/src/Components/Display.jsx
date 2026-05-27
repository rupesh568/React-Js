import css from "./Display.module.css"
const Display=({calVal3})=>{
    return <input 
    onChange={(e)=>{
        e.target.val=calVal3;
    }}
    className={`${css.input}`} type='text' id='display'/>;
}
export default Display;