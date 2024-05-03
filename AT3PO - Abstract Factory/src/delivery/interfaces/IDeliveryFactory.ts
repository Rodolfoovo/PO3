import IDrink from "../../eat/drink/interfaces/IDrink";
import IFood from "../../eat/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink():IDrink;
    createDeliveryFood(): IFood;
}