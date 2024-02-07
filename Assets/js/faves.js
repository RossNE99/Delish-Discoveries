// Function to add a recipe to the favorites list
function addToFavorites(recipe) {
  const favList = $("#favList");
  const favItemTemplate = $("#favItemTemplate");

  // Clone the template and update its content
  const newFavItem = favItemTemplate.clone().contents();
  newFavItem.find(".card-img-top").attr("src", recipe.image);
  newFavItem.find(".card-title").text(recipe.title);
  newFavItem.find(".list-group-item:nth-child(1)").text("Total Time to Make: " + recipe.totalTime);
  newFavItem.find(".list-group-item:nth-child(2)").text("Total Calories: " + recipe.totalCalories);

  // Append the new favurite item to the favorites list
  favList.append(newFavItem);
  newFavItem.removeClass("hide").removeAttr("id");

  // Store favorites in local storage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(recipe);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Function to handle the "Add to Favorites" button click event
function handleAddToFavoritesClick(){
  const recipe = {
    title: "Sample Recipe",
    image: "sample-image.jpg",
    totalTime: "30 minutes",
    totalCalories: "500 kcal"
    
};
console.log("test")
 // Call the addToFavorites function with the recipe details
 addToFavorites(recipe);
}

// Function to add a recipe to the favorites list on the UI
function addToFavoritesUI(recipe) {
  const favList = $("#favList");
  const favItemTemplate = $("#favItemTemplate");

  // Clone the template and update its content
  const newFavItem = favItemTemplate.clone().contents();
  newFavItem.find(".card-img-top").attr("src", recipe.image);
  newFavItem.find(".card-title").text(recipe.title);
  newFavItem.find(".list-group-item:nth-child(1)").text("Total Time to Make: " + recipe.totalTime);
  newFavItem.find(".list-group-item:nth-child(2)").text("Total Calories: " + recipe.totalCalories);

  // Append the new favorite item to the favorites list on the UI
  favList.append(newFavItem);
  newFavItem.removeClass("hide").removeAttr("id");
}

// Event listener for the "Add to Favorites" button
// $(document).ready(function () {
  $("#favBtn").on("click", handleAddToFavoritesClick);
// });

// Function to retrieve favorites from local storage and render them
function renderFavorites() {
  const favList = $("#favList");
  favList.empty();

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.forEach((recipe) => {
      addToFavorites(recipe);
      addToFavoritesUI(recipe);
  });
}

// Call renderFavorites when the page is loaded
// $(document).ready(function () {
// renderFavorites();
// });

