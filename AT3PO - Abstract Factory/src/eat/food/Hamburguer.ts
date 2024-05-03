import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    getDelivery(): void {
        console.log("Hambuguer empacotado. Entrega a caminho");
        this.deliveredRequest();
    }
    deliveredRequest(): void {
        console.log("Hamburguer entregue!");
    }

}