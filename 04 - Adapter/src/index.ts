import PayoneerAdapter from "./adapters/PayorneerAdapter";
import Payoneer from "./payoneer/Payoneer";
import PayoneerPayment from "./payoneer/Payoneer";
import IPayoneerPayment from "./payoneer/interfaces/IPayoneerPayment";
import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/interfaces/IPayPalPayment";

//const payment: IPayPalPayment = new PayPal();
const payment : IPayPalPayment = new PayoneerAdapter(new Payoneer());
payment.sendPayment();
payment.receivePayment();

