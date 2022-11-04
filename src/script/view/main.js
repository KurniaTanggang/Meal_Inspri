import '../component/meal-item.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("#mealList");

    const onButtonSearchClicked = () => {
            searchmeal(searchElement.value);
    };

    const searchmeal = (keyword) => {
        DataSource.searchmeal(keyword)
                .then(renderResult)
                .catch(fallbackResult)
    }

    const renderResult =  results => {
        mealListElement.style.display = "flex";
        mealListElement.children[0].innerHTML = "";
        mealListElement.children[0].style.width = "20%";
        mealListElement.children[1].innerHTML = "";
        mealListElement.children[2].innerHTML = "";
        mealListElement.children[3].innerHTML = "";
        let i = 0;
        
        results.forEach(meal => {  
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal

            mealListElement.children[i].appendChild(mealItemElement);
            if (i==3){
                i=-1;
            }
            
            i+=1;
        })
    };

    const fallbackResult = message => {
        mealListElement.children[0].innerHTML = "";
        mealListElement.children[1].innerHTML = "";
        mealListElement.children[2].innerHTML = "";
        mealListElement.children[3].innerHTML = "";
        mealListElement.children[0].innerHTML += `<h2 class="placeholder">${message}</h2>`;
        mealListElement.children[0].style.width = "100%";
        mealListElement.style.display = "block";
    };

    searchmeal('');

    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;