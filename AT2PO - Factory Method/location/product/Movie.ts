import IItem from "./interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription()
        console.log("Filme Localizado!")
    }
    getDescription(): void {
        console.log("Adquirindo a descrição do filme requerido...")
    }
}