import Permission from "../entidades/Permission";
import Pessoa from "../entidades/Pessoa";
import IPessoa from "../entidades/interfaces/IPessoa";

export default class ProxyPessoa implements IPessoa {
    private pessoa: IPessoa = null;
    private nome : string;
    //Mantendo referencia do objeto que acabou de ser criado.
    constructor(pessoa: IPessoa) {
        this.pessoa = pessoa;
    }

    public request(): string {
        //Aqui esta sendo feita a verificação de acesso do proxy.
        if(this.checkAccess()){
            //Cadastro de tentativa de acesso.
            this.cadastrarAcesso();
            //Chama a função de guardar dados, e caso os dados do usuário já não estejam na cache, 
            //ele os guarda em sua cache
            return this.guardarDados();
        }
    }
    private guardarDados():string{
        //Funcionalidade de cache, para que não precise de busca direta no "banco de dados"
        if(this.pessoa == null){
            this.pessoa = new Pessoa(this.nome);
        }
        return this.pessoa.request();
    }
    private cadastrarAcesso(){
        console.log("Proxy: Guardando tempo da requisição.");
    }
    private checkAccess():boolean{
        //"Verificação de acesso"
        console.log("Proxy: verificando acesso.");
        
        return true;
    }
    
}