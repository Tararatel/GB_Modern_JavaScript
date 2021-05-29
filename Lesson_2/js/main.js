'use strict';

class ProductList {
    constructor(container = '.products') {
      this.container = container;
      this.goods = [];
      this.allProducts = [];
  
      this.fetchGoods();
      this.render();
      this.sum();
    }
  
    fetchGoods() {
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
      const block = document.querySelector(this.container);
  
      for (let product of this.goods) {
        const productObject = new ProductItem(product);
  
        this.allProducts.push(productObject);
        block.insertAdjacentHTML('beforeend', productObject.render());
      }
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
  
  class ProductItem {
    constructor(product, poster='images/no_photo.png') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.poster = product.poster;
    }
  
    render() {
            return `<div class="product-item">
                <h3>${this.title}</h3>
                <img src="${this.poster}" alt="${this.title}">                                
                <p>Price: ${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
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
  
  const catalog = new ProductList();