import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehycleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle{
    private _vehicleType: VehycleType;
    private _seat: number;
    private _engine: Engine;
    private _transmission: Transmission;
    private _wheels:Wheel[] = [];

    /**
     * Getter vehicleType
     * @return {VehycleType}
     */
	public get vehicleType(): VehycleType {
		return this._vehicleType;
	}

    /**
     * Getter seat
     * @return {number}
     */
	public get seat(): number {
		return this._seat;
	}

    /**
     * Getter engine
     * @return {Engine}
     */
	public get engine(): Engine {
		return this._engine;
	}

    /**
     * Getter transmission
     * @return {Transmission}
     */
	public get transmission(): Transmission {
		return this._transmission;
	}

    /**
     * Getter wheels
     * @return {Wheel[] }
     */
	public get wheels(): Wheel[]  {
		return this._wheels;
	}

    /**
     * Setter vehicleType
     * @param {VehycleType} value
     */
	public set vehicleType(value: VehycleType) {
		this._vehicleType = value;
	}

    /**
     * Setter seat
     * @param {number} value
     */
	public set seat(value: number) {
		this._seat = value;
	}

    /**
     * Setter engine
     * @param {Engine} value
     */
	public set engine(value: Engine) {
		this._engine = value;
	}

    /**
     * Setter transmission
     * @param {Transmission} value
     */
	public set transmission(value: Transmission) {
		this._transmission = value;
	}

    /**
     * Setter wheels
     * @param {Wheel[] } value
     */
	public set wheels(value: Wheel[] ) {
		this._wheels = value;
	}

    public addWheel(wheel: Wheel){
        this.wheels.push(wheel);
    }
}