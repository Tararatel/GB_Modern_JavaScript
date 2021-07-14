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

                                    <div class="rating-area">
                                        <input type="radio" id="star-5" name="rating" value="5">
                                        <label for="star-5" title="Оценка «5»"></label>	
                                        <input type="radio" id="star-4" name="rating" value="4">
                                        <label for="star-4" title="Оценка «4»"></label>    
                                        <input type="radio" id="star-3" name="rating" value="3">
                                        <label for="star-3" title="Оценка «3»"></label>  
                                        <input type="radio" id="star-2" name="rating" value="2">
                                        <label for="star-2" title="Оценка «2»"></label>    
                                        <input type="radio" id="star-1" name="rating" value="1" >
                                        <label for="star-1" title="Оценка «1»"></label>
                                    </div>

                                    <p class="rating-area__current">5k</p>

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

// <img src="images/reviews.png" class="goods__box-orderbox-rating">