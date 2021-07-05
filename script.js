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

renderGoodsList(); // выполняем
