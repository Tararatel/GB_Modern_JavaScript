'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(errorMsg => {
                    this.$refs.error.errorMessage(errorMsg);
                });
        },
    },
    mounted() {
        console.log(this);
    }
});




