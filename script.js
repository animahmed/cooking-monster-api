const searchMeals =() =>{
    const searchKeyword = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`;
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoods(data.meals))
}

const displayFoods = foods =>{
    const foodContainer =document.getElementById('food-container');
    foods.forEach(food =>{
       const foodDiv =document.createElement('div');
       foodDiv.className =  'single-result row align-items-center my-3 p-3';
       foodDiv.innerHTML = `<div class="card rounded m-3" style="width: 18rem;">
       <img src=${food.strMealThumb} class="card-img-top" alt="Food  image">
       <h5 class="card-body card-title text-center"> ${food.strMeal} </h5>
       </div>`
       foodContainer.appendChild(foodDiv);

    })


}
const getFoodList = (list) =>{
    const url= `https://www.themealdb.com/api/json/v1/1/list.php?c=${list}`;
    fetch(url)
    .then(res =>res.json())
    .then (data =>console.log(data) )
}


