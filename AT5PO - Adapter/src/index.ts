import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interfaces/ICorreios";

const payment : ICorreios = new TransportadoraAdapter(new Correios);

payment.sendCorreios()
payment.receiveCorreios()