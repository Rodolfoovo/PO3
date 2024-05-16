import Token from "../utils/Token";
import IPayPalPayment from "./interfaces/IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN " + this.token.token);
        console.log("Enviando Pagamento Via PayPal.");
    }
    receivePayment(): void {
        console.log("Recebendo Pagamento Via PayPal.")
    }

}