import Location from "./Location"
import Game from "./product/Game";
import IItem from "./product/interfaces/IItem";

export default class GameLocation extends Location{
    protected createItem(): IItem {
        return new Game();   
    }

}