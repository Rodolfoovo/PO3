import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Correios: Enviando Pacote.");
    }
    receiveCorreios(): void {
        console.log("Correios: Pacote Recebido.");
    }

}