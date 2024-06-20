import Pessoa from "./entidades/Pessoa";
import ProxyPessoa from "./proxy/PessoaProxy";
import Permission from "./Usuario/Permission";
import Usuario from "./Usuario/Usuario"

export const usuarioAcesso: Usuario = 
    {
        email: "admin@gmail.com",
        password : "senha",
        permission: Permission.USER
    }

const pessoaReal = new Pessoa("João");
console.log("Acessando o nome da pessoa a partir da classe Pessoa.");
console.log("Nome da pessoa real:", pessoaReal.request(), "\n");

const pessoaProxy = new ProxyPessoa(pessoaReal,usuarioAcesso);
console.log("Acessando o nome da pessoa a partir do Proxy");
console.log("Nome da pessoa através do proxy:", pessoaProxy.request());