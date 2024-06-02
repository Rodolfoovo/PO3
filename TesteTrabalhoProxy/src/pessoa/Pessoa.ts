import IPessoa from "./interfaces/IPessoa";

export default class Pessoa implements IPessoa{
    constructor(private nome:string){}
    public getNome(): string {
        return this.nome;
    }
}