import Pessoa from "./entidades/Pessoa";
import ProxyPessoa from "./proxy/PessoaProxy";

// Exemplo de uso
const pessoaReal = new Pessoa("João",1);
console.log("Acessando o nome da pessoa a partir da classe Pessoa.");
console.log("Nome da pessoa real:", pessoaReal.request());
const pessoaProxy = new ProxyPessoa(pessoaReal);
console.log("Acessando o nome da pessoa a partir do Proxy");
console.log("Nome da pessoa através do proxy:", pessoaProxy.request());