import Correios from "../correios/Correios";
import ICorreios from "../correios/interfaces/ICorreios";

export default class TransportadoraAdapter implements ICorreios{

    constructor(private correios: Correios){}
    sendCorreios(): void {
        this.correios.sendCorreios();
    }
    receiveCorreios(): void {
        this.correios.receiveCorreios();
    }

}