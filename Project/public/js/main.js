'use strict';

import './CartComp';
import './ProducComp';
import './SearchComp';
import './ErrorComp';
import './observer';
import '../style.css';

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

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('element-show');
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}