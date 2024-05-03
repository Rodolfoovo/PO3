import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    getDelivery(): void {
        console.log("Cerveja empacotada.Entrega a caminho...");
        this.deliveredRequest();
    }
    deliveredRequest(): void {
        console.log("Cerveja entregue!");
    }
    

}