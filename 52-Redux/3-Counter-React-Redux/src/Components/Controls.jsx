import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyAction } from "../../Store";

const Controls = () => {
    const val=useRef();
    const dispatch=useDispatch();

    const handlerIncrement=()=>{
        console.log("Increment called");
        dispatch(counterActions.increment());
    };

    const handlerDecrement=()=>{
        console.log("Decrement called");
        dispatch(counterActions.decrement());

    };

    const handleraddition=()=>{
        // let num1=val.current.value;
        // let num=Number(num1);
        // console.log(num4);
        // console.log(typeof(num4));
        
        // dispatch({type:"ADDITION",payload:{number:Number(val.current.value)}})
        dispatch(counterActions.addition(Number(val.current.value)))
        val.current.value="";
    
    }

    const handlersubtraction=()=>{
        // let num1=val.current.value;
        // let num=Number(num1);
        // dispatch({type:"SUBTRACTION",payload:{number:Number(val.current.value)}});
        dispatch(counterActions.substraction(Number(val.current.value)))
        val.current.value="";

    }
    const handlerPrivacy=()=>{
        dispatch(privacyAction.toggle());
    }
    
    return (
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary"
            onClick={handlerIncrement}
            >
                +1
            </button>
            
            <button type="button" className="btn btn-success"
            onClick={handlerDecrement}
            >
                -1
            </button>

            <button type="button" className="btn btn-danger"
            onClick={handlerPrivacy}
            >
                Privacy Toggle
            </button>
            
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center input-box">
            <input type="text" placeholder="Enter Number" className="input-number"
            ref={val}
            
            />
            
            <button type="button" className="btn btn-info"
            onClick={handleraddition}
            >
                ADD
            </button>
            
            <button type="button" className="btn btn-danger"
            onClick={handlersubtraction}
            >
              SUBTRACT
            </button>

            
        </div>
        </>
    );
};
export default Controls;
