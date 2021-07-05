'use strict';

import './CartComp';
import './ProducComp';
import './SearchComp';
import './ErrorComp';

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