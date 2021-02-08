const searchMeals = async() =>{
    const searchKeyword = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`;
    //load data
    try {
    const  res = await fetch(url);
    const data =await res.json();
    displayFoods(data.meals);
}
catch (error){
    displayError('Sorry!failed to load data')
}
}

const displayFoods = foods =>{
    const foodContainer =document.getElementById('food-container');
    foodContainer.innerHTML = '';
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
const getFoodList = async(list) =>{
    const url= `https://www.themealdb.com/api/json/v1/1/filter.php?i=${list}`;
    try{
    const res= await fetch(url);
    const data = res.json();
   displayFoodList = (data.meals);
}
catch (error){
    displayError('Sorry!failed to load data')
}
}

const displayFoodList = foodlist =>{
    const foodListDiv = document.getElementById('food-list');
    foodListDiv.innerText = foodlist;
}
const displayError = error =>{
    const errorTag = document.getElementById('error-message');
    errorTag.innerText= error;
}

