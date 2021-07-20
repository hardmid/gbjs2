import eventEmiter from '../helpers/eventEmmiter.js'

export default class GoodList {
    constructor() {
        this._goodList = [];
        this._eventEmiter = eventEmiter;
    }

    load(callback, goodClass) {
        callback().then(data => {
            this._goodList = data.map(item => new goodClass(item))
            this._eventEmiter.emit('loaded')
        })
        
    }

    add(good) {
        this._goodList.push(good);
    }

    get(id) {
       return this._goodList.find(good => good.id == id)
    }

    getAll(){
        return this._goodList;
    }

    remove(id) {
        this._goodList = this._goodList.filter(good => good.id !== id)
    }
}