import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    getDelivery(): void {
        console.log("Soft Drink empacotado.Entrega a caminho...");
        this.deliveredRequest();
    }
    deliveredRequest(): void {
        console.log("Soft Drink entregue!");
    }


}