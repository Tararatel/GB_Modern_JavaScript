'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise! Дальше НЕ ИСПОЛЬЗОВАТЬ!!!
const getRequest = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${API}/catalogData.json`, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(`Error! ${xhr.status} ${xhr.statusText}`);
        }
      }
    };

    xhr.send();

  });
};

class ProductList {
    constructor(container = '.products') {
      this.container = container;
      this.goods = [];
      this.allProducts = [];

      this.getProducts()
        .then((data) => {
          this.goods = data;
          this.render();
        });

        document.querySelector('.products').addEventListener('click', (event) => {
          if (event.target.className === 'buy-btn') {
              const itemId = event.target.parentElement.dataset.id;
              const item = this.goods.find((goodsItem) => goodsItem.id_product === parseInt(itemId));
              if (typeof item !== 'undefined') {
                basket.addToBasket(item);
              } else {
                  console.error(`Can't find element with id ${itemId}`);
              }
          }
      });
    }
  
    getProducts() {
      return fetch(`${API}/catalogData.json`)
          .then((response) => response.json())
          .catch((err) => console.log(err));
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
      return this.allProducts.reduce((sum, { price }) => sum + price, 0);
    }
  }
  
  class ProductItem {
    constructor(product, poster='images/no_photo.png') {
      this.product_name = product.product_name;
      this.price = product.price;
      this.id = product.id_product;
      this.poster = poster;
    }
  
    render() {
            return `<div class="product-item" data-id="${this.id}">
                <h3>${this.product_name}</h3>
                <img src="${this.poster}" alt="${this.product_name}">                                
                <p>Price: ${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
    }
  }

  class Basket {
    constructor() {
      this.goods = [];

      this.getBasket()
        .then((data) => {
          this.goods = data;
          console.log(data);
        });
    }

    getBasket() {
      return fetch(`${API}/getBasket.json`)
          .then((response) => response.json())
          .catch((err) => console.log(err));
    }

    addToBasket(item) {
      return fetch(`${API}/addToBasket.json`)
          .then((response) => response.json())
          .then((response) => {
            if (response.result !== 0) {
              const itemIdx = this.goods.contents.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
              console.log(itemIdx);
              if (itemIdx > -1) {
                  this.goods.contents[itemIdx].quantity += 1;
              } else {
                  this.goods.contents.push({ ...item, quantity: 1 });
              }
              console.log(this.goods);
          } else {
              console.error(`Can't add item to basket`, item, this.goods);
          }
          })
          .catch((err) => console.log(err));
    }

    deleteFromBasket(id) {
      return fetch(`${API}/deleteFromBasket.json`)
          .then((response) => response.json())
          .then((response) => {
            if (response.result !== 0) {
                this.goods.contents = this.goods.contents.filter((goodsItem) => goodsItem.id_product !== parseInt(id));
                console.log(this.goods);
            } else {
                console.error(`Can't remove item from basket`, item, this.goods);
            }
          })
          .catch((err) => console.log(err));
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
  const basket = new Basket();
  basket.getBasket();