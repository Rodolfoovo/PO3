import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{
    configureGame(): void {
        this.authToken();
        console.log("Playstation: Jogo sendo configurado.");
    }
    authToken(): void {
        console.log("Playstation: Autorização concluida.");
    }

}