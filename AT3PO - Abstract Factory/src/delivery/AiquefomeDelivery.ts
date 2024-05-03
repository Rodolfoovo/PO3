import Beer from "../eat/drink/Beer";
import IDrink from "../eat/drink/interfaces/IDrink";
import Hamburguer from "../eat/food/Hamburguer";
import IFood from "../eat/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiquefomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}