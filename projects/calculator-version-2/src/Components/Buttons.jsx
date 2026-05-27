import Button from "./Button";
import css from "./Buttons.module.css";
const Buttons = ({ val,handleronClick }) => {
    return (
        <div className={`${css["buttons-container"]}`}>
            {val.map((val2) => (
                <Button 
                val2={val2}
                handleronClick={(e)=>{
                    handleronClick(e,val2)
                }}
                ></Button>
            ))}
            ;
        </div>
    );
};
export default Buttons;
