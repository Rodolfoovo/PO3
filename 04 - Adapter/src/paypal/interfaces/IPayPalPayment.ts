import Token from "../../utils/Token";

export default interface IPayPalPayment{
    authToken(): Token;
    sendPayment():void;
    receivePayment():void;
    
}