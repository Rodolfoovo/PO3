import IPessoa from "./interfaces/IPessoa";

export default class Pessoa implements IPessoa{
    constructor(private nome:string, private nivelAcesso:number){}
    public request(): string {
        return this.nome;
    }

}