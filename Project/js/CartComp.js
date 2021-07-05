'use strict';

Vue.component('cart', {
    data(){
      return {
          cartItems: [],
          showCart: false,
      };
    },
    methods: {
        addProduct(product){
            this.$parent.getJson(`/json/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.cartItems.find(el => el.id === product.id);
                        if(find){
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod);
                        }
                    } else {
                        alert('Error');
                    }
                });
        },
        remove(item) {
            this.$parent.getJson(`/json/deleteFromBasket.json`)
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                });
        },
    },
    mounted(){
        this.$parent.getJson(`/json/getBasket.json`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div>
        <button class="header__user-ico" data-modal @click="showCart = !showCart">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
        
        <div class="cart" v-show="showCart">
            <div class="modal__dialog">
                <div class="modal__content">
                    <form action="#">
                        <div class="modal__close" @click="showCart = !showCart">&times;</div>
                        
                        <div class="modal__title">
                        Ваша корзина:</div>
                        <div class="cart-item" 
                        v-for="item of cartItems" 
                        :key="item.id"
                        :cart-item="item" 
                        @remove="remove">
                            <img :src="item.flag">
                            <div class="cart-item__info">
                                <h3>
                                    {{item.title}}
                                </h3>
                                <p>Количество: {{item.quantity}}</p>
                                <p>Стоимость: {{item.quantity * item.price}}$</p>
                            </div>
                            <button class="delItem" @click="remove(item)">
                                &times;
                            </button>

                        </div>
                        <button class="order__btn" >Оформить заказ</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        `
});