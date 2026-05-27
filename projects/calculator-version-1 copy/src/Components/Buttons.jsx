// import Button from "./Button";
import css from "./Buttons.module.css";
const Buttons = ({ val }) => {

    let Val=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return (
        <div className={`${css["buttons-container"]}`}>
            {Val.map((val2) => (
                <button className={`${css.buttons}`}>{val2}</button>
            ))}
            
        </div>
    );
};
export default Buttons;
