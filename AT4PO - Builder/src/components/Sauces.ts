export default class Sauces{
    constructor(private _sauce: string){}
    public get sauce(): string {
        return this._sauce;
    }
    public set sauce(value: string) {
        this._sauce = value;
    }
}