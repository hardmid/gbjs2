const goods = [
    { title: 'Шорты', color: 'Красные', price: 150 }, // добавим цвет и переименуем данные
    { title: 'Носки', color: 'Черные', price: 50 },
    { title: 'Жакет', color: 'Желтый', price: 350 },
    { title: 'Кроссы', color: 'Белые', price: 250 },
];


const $goodsList = document.querySelector('.goods-list'); // определили блок

const renderGoodsItem = ({ title, color, price }) => { // определили данные в функции вывода
    return `<div class="goods-item"><h3>${title}</h3><p>${color} за ${price} биткоинов</p></div>`; // сформировали вывод
};

const renderGoodsList = (list = goods) => { // рисуем данные
    let goodsList = list.map(
            item => renderGoodsItem(item) // map конвертит данные в массиве, перечисление будет через запятую.
        ).join('\n'); // добавляем сепаратор, разделитель для элементов массива

    $goodsList.insertAdjacentHTML('beforeend', goodsList); // рисуем массив перед закрывающим тегом
}

// renderGoodsList(); // выполняем


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

// list.getPrice(0);
list.renderGoodsList();
list.refreshBasket();
