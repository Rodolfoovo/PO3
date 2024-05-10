import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);
director.constructTruck();
const sedan:Vehicle = builder.getVehicle();
console.log("Criando veiculo...");
console.log("Tipo: " + sedan.vehicleType);
console.log("Potência: " + sedan.engine.power);
console.log("Transmissão: " + sedan.transmission);
console.log("Assentos: " +sedan.seat);
console.log("Rodas: "+ sedan.wheels.length + " Aro: " + sedan.wheels[0].rim )