import Transport from "./Transport";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/interfaces/iVehicle";

export default class CarTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Car();
    }

}