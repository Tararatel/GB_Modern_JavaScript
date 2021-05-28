'use strict';

class GoodItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `<div class="product-item">
                <h3>${this.item.title}</h3>
                <img src="${this.item.poster}" alt="${this.item.title}">                                
                <p>Price: ${this.item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
    }
}

class GoodList {
    constructor() {
        this.goods = [];
    }

    fetchData() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, poster: 'images/laptop.png'},
            {id: 2, title: 'Mouse', price: 20, poster: 'images/mouse.png'},
            {id: 3, title: 'Keyboard', price: 200, poster: 'images/keyboard.png'},
            {id: 4, title: 'Gamepad', price: 50, poster: 'images/gamepad.png'},
            {id: 5, title: 'Mousepad', price: 0, poster: 'images/mousepad.png'},
            {id: 6, title: 'Headset', price: 0, poster: 'images/no_photo.png'},
        ];
    }

    render() {
        const renderProduct = this.goods.map(element => {
            const item = new GoodItem(element);
            return item.render();
        });
        document.querySelector('.products').innerHTML = renderProduct.join('');    
    }

    sum() {
        let sum = 0;
        this.goods.forEach(e => {
                sum += e.price;
            }
        );
        console.log(sum);
    }
}

class Cart {
    fetchData() {
        // запрос данных с сервера
    }

    clear() {
        // очистить корзину
    }

    render() {
        // отрисовать корзину с товаром
    }

    payOrder() {
        // оформит заказ
    }
}

class CartEl {
    addEl() {
        // добавить товар
    }

    removeEl() {
        // удалить товар
    }

    details() {
        // посмотреть карточку товара
    }

    favourites() {
        // перенести товар в избранное и убраь из корзины
    }
}

const list = new GoodList();
list.fetchData();
list.render();
list.sum();