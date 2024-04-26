import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Jogo Localizado");
    }
    getDescription(): void {
        console.log("Analizando a descrição do jogo requerido..");
    }
    
}