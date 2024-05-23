import IPlatform from "../platforms/interfaces/IPlatform";
import ITransmission from "./interfaces/ITransmission";

export default class Live implements ITransmission{

    constructor(private platform: IPlatform){

    }
    broadcasting(): void {
        console.log("Iniciando Trabsmissão...");
    }
    result(): void {
        console.log("***** NO AR *****");
    }

}