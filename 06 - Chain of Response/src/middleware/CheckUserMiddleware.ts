import { Database } from "../server/Database";
import Middleware from "./Middleware";

export default class ChecUserMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        //Valida o email.
        if(email.indexOf("@") === -1){
            console.log("Email Invaíido.");
            return false;
        }

        if(!Database.filter(item => item.email === email && item.password === password).length){
            console.log("Usuário Não Encontrado");
            return false;
        }
        return this.checkNext(email, password);
    }

}