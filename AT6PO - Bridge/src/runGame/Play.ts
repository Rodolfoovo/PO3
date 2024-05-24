import IConsole from "../consoles/interfaces/IConsole";
import IPlay from "./interfaces/IPlay";

export default class Play implements IPlay{

    constructor(private console: IConsole){}
    playing(): void {
        console.log("Jogo sendo Inicializado...");
    }
    result(): void {
        console.log("Jogo Inicializado com Sucesso!");
    }

}