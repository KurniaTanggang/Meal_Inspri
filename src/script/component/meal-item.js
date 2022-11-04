class mealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <img class="thumb-meal" src="${this._meal.strMealThumb}" alt="Meal Thumb">
            <div class="meal-info">
                <h4>${this._meal.strMeal}</h4>
                <p>${this._meal.strInstructions}</p>
            </div>`;
    }
 }
  
 customElements.define("meal-item", mealItem);