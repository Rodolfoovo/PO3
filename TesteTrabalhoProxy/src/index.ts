import Pessoa from "./pessoa/Pessoa";
import ProxyPessoa from "./pessoa/proxy/PessoaProxy";

// Exemplo de uso
const pessoaReal = new Pessoa("João");
console.log("Nome da pessoa real:", pessoaReal.getNome());

const pessoaProxy = new ProxyPessoa("Maria");
console.log("Nome da pessoa através do proxy:", pessoaProxy.getNome());