const ErrorMessage=({todoItems})=>{
    return <>
    {todoItems.length==0 && <h2>I am still Hungry</h2>}

    </>
    
}
export default ErrorMessage;