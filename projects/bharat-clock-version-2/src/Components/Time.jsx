import { useEffect, useState } from "react";

const Time=()=>{


    const[time,setTime]=useState(new Date());
    useEffect(()=>{
        
        let updateTime=setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(updateTime);
            

        }

    },[]);
    return <p>
        This is the current time: {time.toLocaleDateString()}- {" "} {time.toLocaleTimeString()}
    </p>
}
export default Time;