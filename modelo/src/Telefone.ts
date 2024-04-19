export class Telefone{
    private _ddd : string;
    private _numero : number;
    private _tipo : string;


	constructor(ddd: string, numero: number, tipo: string) {
		this._ddd = ddd;
		this._numero = numero;
		this._tipo = tipo;
	}


    /**
     * Getter ddd
     * @return {string}
     */
	public get ddd(): string {
		return this._ddd;
	}

    /**
     * Setter ddd
     * @param {string} value
     */
	public set ddd(value: string) {
		this._ddd = value;
	}


    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}


    /**
     * Getter tipo
     * @return {string}
     */
	public get tipo(): string {
		return this._tipo;
	}

    /**
     * Setter tipo
     * @param {string} value
     */
	public set tipo(value: string) {
		this._tipo = value;
	}

}