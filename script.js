class Good {
    constructor(title, color, price) {
        this._title = title;
        this._color = color;
        this._price = price;
    }

    getPrice() {
        return parseInt(`${this._price}`);
    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._color} по ${this._price} уевро</p></div>`;
    }
}

class GoodList {
    constructor (goods) {
        this._goods = goods;
        this._$goodsListContainer = document.querySelector('.goods-list');
    }

    renderGoodsList() {
        let goodsList = this._goods.map(
                item => item.render()
            ).join(' ');
        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }

    refreshBasket() {
        let summ = 0;
        for (let index = 0; index < this._goods.length; index++) {
            summ += this._goods[index].getPrice()
        }
        this._$goodsListContainer.insertAdjacentHTML('beforeend', 'Стоимость корзины: ' + summ + ' уевро');
    }

}

const list = new GoodList([
    new Good('Bread', 'black', 15),
    new Good('Eggs', 'white', 20),
    new Good('Beer', 'yellow', 45),
    new Good('Fish', 'red', 98),
])

list.renderGoodsList();
list.refreshBasket();
