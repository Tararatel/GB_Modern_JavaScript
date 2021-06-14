'use strict';

Vue.component('error', {
    data(){
        return {
            textError: '',
        };        
    },

    methods: {
        errorMessage(errorMsg) {
            this.textError = errorMsg;
        },
    },

    computed: {
        isVisible(){
            return this.textError !== '';
        },
      },

    template: `
    <div class="error" v-if="isVisible"> 
    <p class="error-text">
        {{ textError }}
    </p>
</div>
    `,
});