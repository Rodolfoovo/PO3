import Pessoa from "./entidades/Pessoa";
import ProxyPessoa from "./proxy/PessoaProxy";
import Permission from "./Usuario/Permission";
import Usuario from "./Usuario/Usuario"
//Exemplo de criação de usuario, somente para teste
export const usuarioAcesso: Usuario = 
    {
        email: "admin@gmail.com",
        password : "senha",
        permission: Permission.ADMIN
    }

// Exemplo de uso
const pessoaReal = new Pessoa("João");
console.log("Acessando o nome da pessoa a partir da classe Pessoa.");
console.log("Nome da pessoa real:", pessoaReal.request(), "\n");

//Exemplo de uso do proxy
const pessoaProxy = new ProxyPessoa(pessoaReal,usuarioAcesso);
console.log("Acessando o nome da pessoa a partir do Proxy");
console.log("Nome da pessoa através do proxy:", pessoaProxy.request());