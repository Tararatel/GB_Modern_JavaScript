'use strict';

Vue.component('products', {
    data(){
        return {
            products: [],
            filtered: [],
        };
    },
    
    mounted(){
        this.$parent.getJson(`/json/catalogData.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },

    methods: {
        filter(searcher){
            let regexp = new RegExp(searcher, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.title));
            this.$parent.$refs.search.userSearch = '';
        }
    },

    template: `
        <div class="goods_wrapper">
                    <h1 class="goods__title" v-if="filtered.length == 0">Направление не найдено</h1>
                    <div class="goods__box" v-for="item of filtered" :key="item.id" :product="item">
                        <img :src="item.poster">
                        <div class="goods__box-orderbox-wrapper">
                            <div class="goods_box-orderbox">
                                <h4 class="goods__box-orderbox-title">
                                    {{item.title}}
                                </h4>
                                <div class="goods__box-orderbox-priceandrating">
                                    <p class="goods__box-orderbox-price">
                                        $ {{item.price}}
                                    </p>
                                    <img src="images/reviews.png" class="goods__box-orderbox-rating">
                                </div>
                            </div>
                            <button class="goods__box-orderbox-addgood" @click="$root.$refs.cart.addProduct(item)">
                                +
                            </button>
                        </div>
                    </div>
                </div>
    `
});