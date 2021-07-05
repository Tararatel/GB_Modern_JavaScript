'use strict';

Vue.component('search', {
    data(){
        return {
            userSearch: ''
        };        
    },

    template: `
            <div>
                <form action="#" class="header__icons-search" @submit="$parent.$refs.products.filter(userSearch)">
                <input type="text" v-model.lazy="userSearch">
                    <button type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>
    `
});