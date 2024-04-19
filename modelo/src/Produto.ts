export  class Produto{

    private _codigo : number;
    private _descricao : string;
    private _valor : number;


	constructor(codigo:number, descricao:string, valor:number) {
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
	}
    

    /**
     * Getter descricao
     * @return {string}
     */
	public get descricao(): string {
		return this._descricao;
	}

    /**
     * Setter descricao
     * @param {string} value
     */
	public set descricao(value: string) {
		this._descricao = value;
	}

    /**
     * Getter valor
     * @return {number}
     */
	public get valor(): number {
		return this._valor;
	}

    /**
     * Setter valor
     * @param {number} value
     */
	public set valor(value: number) {
		this._valor = value;
	}

    /**
     * Getter codigo
     * @return {number}
     */
	public get codigo(): number {
		return this._codigo;
	}

    /**
     * Setter codigo
     * @param {number} value
     */
	public set codigo(value: number) {
		this._codigo = value;
	}

}