'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 2000, poster: 'images/laptop.png'},
    {id: 2, title: 'Mouse', price: 20, poster: 'images/mouse.png'},
    {id: 3, title: 'Keyboard', price: 200, poster: 'images/keyboard.png'},
    {id: 4, title: 'Gamepad', price: 50, poster: 'images/gamepad.png'},
    {id: 5, title: 'Mousepad', price: '', poster: 'images/mousepad.png'},
    {id: 6, title: 'Headset', price: '', poster: ''},
];
//Функция для формирования верстки каждого товара
const renderProduct = item => {
    if(item.price == '') {
        item.price = 'Нет в наличии';   
    }

    if(item.poster == '') {
        item.poster = 'images/no_photo.png';
    } 

    return `<div class="product-item">
                <h3>${item.title}</h3>
                <img src="${item.poster}" alt="${item.title}">                                
                <p>Price: ${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};

const renderPage = (list) => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");
    
    
    // Запятые появлялись, потому что мы выводили не элементы разметки отдельно, а массив целиком, который перечислял элементы через запятую.
};

renderPage(products);