'use strict';

/* Некая сеть фастфуда предлагает несколько видов гамбургеров:

Маленький (50 рублей, 20 калорий).
Большой (100 рублей, 40 калорий).

Гамбургер может быть с одним из нескольких видов начинок (обязательно):
С сыром (+10 рублей, +20 калорий).
С салатом (+20 рублей, +5 калорий).
С картофелем (+15 рублей, +10 калорий).

Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 

Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
Можно использовать примерную архитектуру класса со следующей страницы, но можно использовать и свою. */

class Hamburger {
    constructor() { 
        this.size = {
            large: [100, 40],
            small: [50, 20],
        },
        this.toppings = {
            cheese: [10, 20],
            salad: [20, 5],
            potato: [15, 10],
        },
        this.condiment = {
            spice: [15, 0],
            mayonnaise: [20, 5],
        },
        this.price = 0,
        this.calories = 0,
        this.getSize();
     }
    
    getSize() {
        const answer = prompt('Какой размер гамбургера желаете откушать? Large или small?');

            this.price += this.size[answer.toLowerCase()][0];
            this.calories += this.size[answer.toLowerCase()][1];
            this.addTopping();        
    }
       
    addTopping() {
        const answer = prompt('Какую добавку добавить? Cheese, salad, potato?');

            this.price += this.toppings[answer.toLowerCase()][0];
            this.calories += this.toppings[answer.toLowerCase()][1];
            this.addCondiment();
    }
    
    addCondiment() {
        const answer = prompt('А ещё можно добавить специи или мазик!!! Yes / No');

        if(answer == 'Yes'.toLowerCase()) {
            const answer = prompt('Spice or mayonnaise');

            this.price += this.condiment[answer.toLowerCase()][0];
            this.calories += this.condiment[answer.toLowerCase()][1];
        } 
        
        this.calculatePriceAndCalories();
    }

    calculatePriceAndCalories() {
        alert('Стоимость гамбургера: ' + this.price + ' . Калорийность: ' + this.calories);
    }
  }

  function order() {
    const hamburger = new Hamburger();
    return hamburger;
}

order();