import Pessoa from "../Pessoa";
import IPessoa from "../interfaces/IPessoa";

export default class ProxyPessoa implements IPessoa {
    private pessoa: IPessoa;

    constructor(nome: string) {
        this.pessoa = new Pessoa(nome);
    }

    getNome(): string {
        // Podemos adicionar lógica extra aqui, como lazy loading ou caching
        return this.pessoa.getNome();
    }
}