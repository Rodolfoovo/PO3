import {Endereco} from "./Endereco";
import {Telefone} from "./telefone";

export class Cliente{
    private _nome : string;
    private _cpf : number;
    private _data_nascimento : number;
    private _sexo : string;
    private _endereco : Endereco;
    private _telefones : Telefone[];




	constructor(nome: string, cpf: number, data_nascimento: number, sexo: string, endereco: Endereco, telefones: Telefone[]) {
		this._nome = nome;
		this._cpf = cpf;
		this._data_nascimento = data_nascimento;
		this._sexo = sexo;
		this._endereco = endereco;
		this._telefones = telefones;
	}
	/**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Getter cpf
     * @return {number}
     */
	public get cpf(): number {
		return this._cpf;
	}

    /**
     * Setter cpf
     * @param {number} value
     */
	public set cpf(value: number) {
		this._cpf = value;
	}

    /**
     * Getter data_nascimento
     * @return {number}
     */
	public get data_nascimento(): number {
		return this._data_nascimento;
	}

    /**
     * Setter data_nascimento
     * @param {number} value
     */
	public set data_nascimento(value: number) {
		this._data_nascimento = value;
	}

    /**
     * Getter sexo
     * @return {string}
     */
	public get sexo(): string {
		return this._sexo;
	}

    /**
     * Setter sexo
     * @param {string} value
     */
	public set sexo(value: string) {
		this._sexo = value;
	}

    /**
     * Getter endereco
     * @return {Endereco}
     */
	public get endereco(): Endereco {
		return this._endereco;
	}

    /**
     * Setter endereco
     * @param {Endereco} value
     */
	public set endereco(value: Endereco) {
		this._endereco = value;
	}

    /**
     * Getter telefones
     * @return {Telefone[]}
     */
	public get telefones(): Telefone[] {
		return this._telefones;
	}

    /**
     * Setter telefones
     * @param {Telefone[]} value
     */
	public set telefones(value: Telefone[]) {
		this._telefones = value;
	}

	

    
}