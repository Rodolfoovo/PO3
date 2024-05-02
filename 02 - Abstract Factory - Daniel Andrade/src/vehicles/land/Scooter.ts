import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Scooter: Entrega coletada");
    }
}