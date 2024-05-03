import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    getDelivery(): void {
        console.log("HotDog empacotado. Entrega a caminho...");
        this.deliveredRequest();
    }
    deliveredRequest(): void {
        console.log("HotDog entregue!");
    }

}