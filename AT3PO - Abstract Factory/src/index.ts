import Client from "./clients/Client";
import AiquefomeDelivery from "./delivery/AiquefomeDelivery";
import Company from "./delivery/Company";
import IFoodDelivery from "./delivery/IFoodDelivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentCompany = Company.AIQUEFOME;
let factory:IDeliveryFactory;

switch(currentCompany){
    case Company.IFOOD:
        factory = new IFoodDelivery();
        break;
    case Company.AIQUEFOME:
        factory = new AiquefomeDelivery();
        break;
    default:
        console.log("Selecione uma escolha de delivery existente.");
}
const client = new Client(factory);
client.startDelivery();