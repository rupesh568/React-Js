import css from "./Button.module.css";
const Button = ({ val2,handleronClick }) => {
    return <button 
    className={`${css.buttons}`}
    onClick={handleronClick}
    >
        {val2}
        </button>;
};
export default Button;
