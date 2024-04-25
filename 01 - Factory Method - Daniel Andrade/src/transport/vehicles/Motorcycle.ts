import IVehicle from "./interfaces/iVehicle";

export default class Motorcycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Moto: Encomendo Retirada...")
    }

}