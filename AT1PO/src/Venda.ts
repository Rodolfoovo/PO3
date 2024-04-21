import {Cliente} from "./Cliente"
import {Produto} from "./Produto"
class Venda{
    private _codigo :number;
    private _data : number;
    private _cliente : Cliente;
    private _produtos : Produto[];


    /**
     * Getter produtos
     * @return {Produto[]}
     */
	public get produtos(): Produto[] {
		return this._produtos;
	}

    /**
     * Setter produtos
     * @param {Produto[]} value
     */
	public set produtos(value: Produto[]) {
		for(let i=0; i<this.produtos.length;i++){
            this.produtos.push(value[i]);
        }
	}

    /**
     * Getter codigo
     * @return {number}
     */
	public get codigo(): number {
		return this._codigo;
	}

    /**
     * Getter data
     * @return {number}
     */
	public get data(): number {
		return this._data;
	}

    /**
     * Getter cliente
     * @return {Cliente}
     */
	public get cliente(): Cliente {
		return this._cliente;
	}

    /**
     * Setter codigo
     * @param {number} value
     */
	public set codigo(value: number) {
		this._codigo = value;
	}

    /**
     * Setter data
     * @param {number} value
     */
	public set data(value: number) {
		this._data = value;
	}

    /**
     * Setter cliente
     * @param {Cliente} value
     */
	public set cliente(value: Cliente) {
		this._cliente = value;
	}
    public calculaTotal() : number{
        let total = 0;
        for(let i = 0; i < this.produtos.length; i++){
            total += this.produtos[i].valor;
        }
        return total;
    }
}