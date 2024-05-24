import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Jogo sendo configurado.");
    }
    authToken(): void {
        console.log("Xbox: Autorização concluida.");
    }

}