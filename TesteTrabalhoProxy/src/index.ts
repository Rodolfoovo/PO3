import Pessoa from "./pessoa/Pessoa";
import ProxyPessoa from "./pessoa/proxy/PessoaProxy";

// Exemplo de uso
const pessoaReal = new Pessoa("João");
console.log("Acessando o nome da pessoa a partir da classe Pessoa.");
console.log("Nome da pessoa real:", pessoaReal.request());

const pessoaProxy = new ProxyPessoa(pessoaReal);
console.log("Acessando o nome da pessoa a partir do Proxy");
console.log("Nome da pessoa através do proxy:", pessoaProxy.request());