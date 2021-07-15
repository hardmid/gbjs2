class Good {
    constructor(title, color, price, discount) {
        this._title = title;
        this._color = color;
        this._price = price;
        this._discount = discount;
    }

    getPrice() {
        // return parseInt(`${this._price}`);
        // или
        return this._price - this._discount;
    }

    getDiscount() {
        if (this._discount>0) {
            return "(скидка "+this._discount+" уевро)";
        } else {
            return ""; // костыль, должен быть способ лучше..
        }
    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._color} по ${this._price-this._discount} уевро ${this.getDiscount()}</p></div>`;
    }
}

class GoodList {
    constructor (goods) {
        this._goods = goods;
        this._$goodsListContainer = document.querySelector('.goods-list');
        this._$goodsListSummContainer = document.querySelector('.price-summ');
    }

    renderGoodsList() {
        let goodsList = this._goods.map(
                item => item.render()
            ).join(' ');
        this._$goodsListContainer.insertAdjacentHTML('afterbegin', goodsList);
    }

    refreshBasket() {
        let summ = 0;
        for (let index = 0; index < this._goods.length; index++) {
            summ += this._goods[index].getPrice()
        }
        this._$goodsListSummContainer.insertAdjacentHTML('beforeend', 'Стоимость корзины: ' + summ + ' уевро');
    }

}

const list = new GoodList([
    new Good('Bread', 'black', 15,0),
    new Good('Eggs', 'white', 20,0),
    new Good('Beer', 'yellow', 45,0),
    new Good('Fish', 'red', 98,0),
    new Good('Fish2', 'red', 100,10),
    new Good('Fish3', 'red', 100,20)
])

list.renderGoodsList();
list.refreshBasket();
