import Pessoa from "../Pessoa";
import IPessoa from "../interfaces/IPessoa";

export default class ProxyPessoa implements IPessoa {
    private pessoa: IPessoa;
    //Mantendo referencia do objeto que acabou de ser criado.
    constructor(pessoa: IPessoa) {
        this.pessoa = pessoa;
    }

    public request(): string {
        // Podemos adicionar lógica extra aqui, como lazy loading ou caching
        if(this.checkAccess()){
            this.cadastrarAcesso();
            return this.pessoa.request();
        }
    }

    private cadastrarAcesso(){
        console.log("Proxy: Guardando tempo da requisição.");
    }
    private checkAccess():boolean{
        console.log("Proxy: verificando acesso.");
        return true;
    }
}