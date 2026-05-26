import FoodItem from "./FoodItem";

const FoodItems = ({ foodItems }) => {
    return<ul className="list-group">
        {foodItems.map((val) => (
            <FoodItem key={val} food={val}></FoodItem>
        ))}
    </ul>
}
export default FoodItems;
