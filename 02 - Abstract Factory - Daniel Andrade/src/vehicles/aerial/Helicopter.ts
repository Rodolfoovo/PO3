import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute():void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: iniciando decolagem...");
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros embarcados");
    }
    checkWind(): void {
        console.log("Helicóptero: ventos a 25km, sudeste");
    }
}