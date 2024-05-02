import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private airtcraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.airtcraft = factory.createTransportAircraft();
    }

    startRoute():void{
        this.vehicle.startRoute();
        this.airtcraft.startRoute();
    }
}