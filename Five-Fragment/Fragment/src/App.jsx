import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import AppName from "./Components/AppName";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {

  let foodItems=['Rice','Dal','Vegetables','Milk','Apple',"Mango"];
  // if(foodItems.length==0){
  //   return <h1>I am still hungry.</h1> /*this is of if-else condition*/
  // }




    return (
        <>
            <AppName></AppName>
            {/* /* {foodItems.length==0?<h1>I am still hungry</h1>:null} /*this is of terniary operator8*/  }
            {/* {foodItems.length==0 && <h1>I am still hungry</h1>} */}
            <ErrorMessage foodItems={foodItems}></ErrorMessage>
            <FoodItems foodItems={foodItems}></FoodItems>
            {/* <ul class="list-group">
                <li class="list-group-item">Dal</li>
                <li class="list-group-item">Vegetables</li>
                <li class="list-group-item">Rice</li>
                <li class="list-group-item">Milk</li>
                <li class="list-group-item">Apple</li>
            </ul> */}
        </>
    );
}
export default App;