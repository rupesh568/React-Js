import { useSelector } from "react-redux";

const Display=()=>{

    const {counterVal}=useSelector((newStore4)=>{   /*useSelector works as subscriber*/
        return newStore4.counter;

    })
    return <p className="lead mb-4">
        Counter Current Value:{counterVal}
    </p>
}
export default Display;