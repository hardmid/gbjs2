export default class Good {
    constructor({id, product_name:title, product_desc:description, image, price}) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._image = image;
        this._price = price;
    }

    get id() { return this._id }
    get price() { return this._price }
    get title() { return this._title }
    get description() { return this._description }
    get image() { return this._image }
}