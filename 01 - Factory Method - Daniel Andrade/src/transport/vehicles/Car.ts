import IVehicle from "./interfaces/iVehicle";

export default class Car implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados");
    }

}