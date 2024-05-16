import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/interfaces/IPayPalPayment";

const payment: IPayPalPayment = new PayPal();
payment.sendPayment();
payment.receivePayment();