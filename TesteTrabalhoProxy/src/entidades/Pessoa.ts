import IPessoa from "./interfaces/IPessoa";

export default class Pessoa implements IPessoa{
    constructor(private nome:string){}
    public request(): string {
        return this.nome;
    }

}