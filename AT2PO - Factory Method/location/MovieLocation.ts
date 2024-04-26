import Location from "./Location"
import Movie from "./product/Movie";
import IItem from "./product/interfaces/IItem";

export default class MovieLocation extends Location{
    protected createItem(): IItem {
        return new Movie();
    }

}