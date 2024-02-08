function renderFavsList(){
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  $("#favs-list").empty(); //remove anything thats currently in the recipe-list div
  $.each(favorites, function(index, recipe){   //for each recipe create a recipe card

      const uniqueKey = recipe._links.self.href

      var {image, label, totalTime, calories, dietLabels} = recipe.recipe  //destructute 
      var recipeCard = $("<div>", { //create the parent div for the recipe card
          class:"col", // add classes to the recipe card
          html: `
              <div data-recipeid='${uniqueKey}' class="card m-2 d-flex flex-wrap row">
                  <img src="${image}" class="card-img-top p-0" alt="${label}">
                  <div class="card-body">
                      <h5 class="card-title">${label}</h5>
                      <p class="card-text"></p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Total Time to Make: ${totalTime} mins</li>
                      <li class="list-group-item">Total Calories: ${Math.floor(calories)}</li>
                      <li class="list-group-item">${dietLabels.join(", ")}</li>
                  </ul>
              </div>`,
      })
      $("#favs-list").append(recipeCard) //add recipe card to the recipe card div
  })

  $("#favs-list").on("click", ".card", function(e) {
    var recipeId = $(e.currentTarget).data("recipeid")
    var recipe = favorites.find(recipe => recipe._links.self.href === recipeId);
    openRecipeModal(null, recipe)
  })
}
