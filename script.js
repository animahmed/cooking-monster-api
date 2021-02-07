function displayRecipes() {
    const searchMeals = document.getElementById('searchInput').value;
    const foodCart = document.getElementById('foodCart');
    const link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`;
    fetch(link)
        .then(response => response.json())
        .then(data => {
            const recipes = data.meals;
            if (recipes == null){
                document.getElementById('error').style.display = 'flex';
            } else{
                recipes.forEach(recipe => {
                    const recipeName = recipe.strMeal;
                    const recipeImgLink = recipe.strMealThumb;
                    const newCard = document.createElement('div');
                    newCard.className = 'recipeCard';
                    newCard.id = recipe.idMeal;
                    newCard.innerHTML = `<div class="card rounded m-3" style="width: 18rem;">
                    <img src=${recipeImgLink} class="card-img-top" alt="Food  image">
                    <h5 class="card-body card-title text-center"> ${recipeName} </h5>
                    </div>`
                    foodCart.appendChild(newCard)
                });
            }
        })
}
