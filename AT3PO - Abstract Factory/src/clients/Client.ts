import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../eat/drink/interfaces/IDrink";
import IFood from "../eat/food/interfaces/IFood";

export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }
    startDelivery(): void{
        this.drink.getDelivery();
        this.food.getDelivery();
    }
}