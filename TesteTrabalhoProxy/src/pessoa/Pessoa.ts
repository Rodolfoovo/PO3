import IPessoa from "./interfaces/IPessoa";

export default class Pessoa implements IPessoa{
    constructor(private nome:string){}
    getNome(): string {
        return this.nome;
    }

}