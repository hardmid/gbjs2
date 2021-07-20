import Good from "./Good.js";

export default class PurchasedGood extends Good {
    constructor(goodData, quantity = 1) {
        super(goodData);

        this._quantity = quantity;
    }

    get price() { return this._price * this._quantity }
    get quantity() { return this._quantity }

    add() { this._quantity++ }
    remove() { 
        this._quantity--;
    }
}