import Pessoa from "../entidades/Pessoa";
import IPessoa from "../entidades/interfaces/IPessoa";

export default class ProxyPessoa implements IPessoa {
    private pessoa: IPessoa = null;
    private nome : string;
    private nivelAcesso: number;
    //Mantendo referencia do objeto que acabou de ser criado.
    constructor(pessoa: IPessoa) {
        this.pessoa = pessoa;
    }

    public request(): string {
        //Aqui esta sendo feita a verificação de acesso do proxy.
        if(this.checkAccess()){
            //Cadastro de tentativa de acesso.
            this.storeAccess();
            //Chama a função de guardar dados, e caso os dados do usuário já não estejam na cache, 
            //ele os guarda em sua cache
            return this.storeData();
        }
        console.log("Proxy: Acesso negado! Nivel de acesso muito baixo para a requisição!");
        return null;
    }
    private storeData():string{
        //Funcionalidade de cache, para que não precise de busca direta no "banco de dados"
        if(this.pessoa == null){
            console.log("Proxy:Carregando dados na cache");
            this.pessoa = new Pessoa(this.nome, this.nivelAcesso);
        }
        return this.pessoa.request();
    }
    private storeAccess(){
        console.log("Proxy: Guardando tempo da requisição.");
    }
    private checkAccess():boolean{
        if(this.nivelAcesso == 2){
        //"Verificação de acesso"
        console.log("Proxy: verificando acesso.");
        
        return true;
        }
        return false;
    }
    
}