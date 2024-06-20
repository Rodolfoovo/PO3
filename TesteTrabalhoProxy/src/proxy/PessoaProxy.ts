import Permission from "../Usuario/Permission";
import Usuario from "../Usuario/Usuario";
import Pessoa from "../entidades/Pessoa";
import IPessoa from "../entidades/interfaces/IPessoa";

export default class ProxyPessoa implements IPessoa {
    private pessoa: IPessoa = null;
    private usuarioAcesso:Usuario;
    private nome : string;

    //Mantendo referencia do objeto que acabou de ser criado.
    constructor(pessoa: IPessoa,usuarioAcesso: Usuario) {
        this.pessoa = pessoa;
        this.usuarioAcesso = usuarioAcesso
    }

    public request(): string {
        //Cadastro de acesso.
        this.storeAccess();
        //Aqui esta sendo feita a verificação de acesso do proxy.
        if(this.checkAccess()){
            if(this.pessoa == null){
                //Chama a função de guardar dados, e caso os dados do usuário já não estejam na cache, 
                //ele os guarda em sua cache
                return this.storeCache();
            }
            else{
                return this.pessoa.request();
            }
        }
        else{
            console.log("Proxy: Acesso negado! Nivel de acesso muito baixo para a requisição!");
            return null;
        }
    }
    private storeCache():string{
        //Funcionalidade de cache, para que não precise de busca direta no "banco de dados"
        console.log("Proxy:Carregando dados na cache");
        this.pessoa = new Pessoa(this.nome);
        return this.pessoa.request();
    }
    private storeAccess(){
        console.log("Proxy: Guardando tempo da requisição.");
    }
    private checkAccess():boolean{
        console.log("Proxy: verificando acesso.");
        if(this.usuarioAcesso.permission == Permission.ADMIN){
            console.log("Proxy: Acesso feito por um administrador, bem vindo!");
        //"Verificação de acesso"        
        return true;
        }
        return false;
    }
    
}