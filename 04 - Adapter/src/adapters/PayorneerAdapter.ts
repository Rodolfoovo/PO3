import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment{

    constructor(private payoneer: Payoneer){
        console.log("Adaptando payoneer no paypal.");
    }
    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.payoneer.sendPayment();
    }
    receivePayment(): void {
        this.payoneer.receivePayment();
    }

}