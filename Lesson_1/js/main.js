'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000, poster: 'images/laptop.png'},
    {id: 2, title: 'Mouse', price: 20, poster: 'images/mouse.png'},
    {id: 3, title: 'Keyboard', price: 200, poster: 'images/keyboard.png'},
    {id: 4, title: 'Gamepad', price: 50, poster: 'images/gamepad.png'},
    {id: 5, title: 'Mousepad', poster: 'images/mousepad.png'},
    {id: 6, title: 'Headset'},
];
//Функция для формирования верстки каждого товара
const renderProduct = (title = 'Новый арт.', price = 'Товара нет в наличии', poster = 'images/no_photo.png') => {

    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${poster}" alt="${title}">                                
                <p>Price: ${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};

const renderPage = (list) => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price, item.poster)).join("");
    
    
    // Запятые появлялись, потому что мы выводили не элементы разметки отдельно, а массив целиком, который перечислял элементы через запятую. Метод join() даёт возможность выбрать нужный разделитель. В данном случае мы его не указываем и запятые исчезают.
};

renderPage(products);