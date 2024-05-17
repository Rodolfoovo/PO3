import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Transportadora: Enviando Pacote.");
    }
    receive(): void {
        console.log("Transportadora: Pacote recebido.")
    }

}