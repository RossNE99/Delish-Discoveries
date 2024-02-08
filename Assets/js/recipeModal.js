function openRecipeModal(e, recipe) {
  $("#recipeModal button").off("click"); //Remove all click event listners from old/prev modal

  if (!recipe) {
    //If no recipe was passed into this function then it was called from the search page, below is how we find the correct recipe that the user clicked on
    var recipeId = $(e.currentTarget).data("recipeid"); //Get the uniqe id for the recipe that was clicked
    recipe = loadedRecipes.find(
      (recipe) => recipe._links.self.href === recipeId
    ); //retrive that recipe from the loadedrecipe array, using recipeID to identify the correct one
  } else {
    //  $("#planMealDateInput").addClass - Unfinnished remove buttons for add to call here if opened from cal
  }

  var {image, label, totalTime, calories, dietLabels, cuisineType, dishType, yield, ingredientLines, url} = recipe.recipe //Destructute recipe object
    $("#recipeModalLabel").text(label)  //set modal heading to the name of the recipe
    var modalImg = $("<img>", {src: image, alt: label, style: "object-fit: contain; height: 100% ;width: 100%;"})   //create image of the recipe to the modal
    $("#recipeModalBodyImg").empty().append(modalImg) //add the image into the modal
    var recipeInfo =$("<div>", {    //create the recipe info section
        html: ` 
        <div class="card-header">
           <h5>Recipe Info</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Calories:</b> ${Math.floor(calories)}</li>
            <li class="list-group-item"><b>Total Time:</b> ${totalTime} Mins</li>
            <li class="list-group-item"><b>Cuisine Type(s):</b> ${cuisineType.join(", ")}</li>
            <li class="list-group-item"><b>Dish Type:</b> ${dishType.join(", ")}</li>
            <li class="list-group-item"><b>Diet Labels:</b> ${dietLabels.join(", ")}</li>
            <li class="list-group-item"><b>serves:</b> ${yield} People</li>
        </ul>`    //Not sure if yield is acuareate :/
    })
    $("#recipeInfo").empty().append(recipeInfo) //add the recipe info section to the page

  $("#ingredientsList").empty();
  $.each(ingredientLines, function (indexInArray, ingredient) {
    //create ingredint list
    var ingredientLI = $("<li>", {
      class: "list-group-item",
      text: ingredient,
    });
    $("#ingredientsList").append(ingredientLI); //add each ingreadint to the page
  });

  $("#viewCookingInstructionsBtn").on("click", function () {
    window.open(url, "_blank");
  }); //open recipe instructions in new tab when view recipe button is clicked

  renderGraph(recipe); //create the chart
  $("#recipeModal").modal("show"); //add the chart to the page

  $("#planMealDateInput").daterangepicker(
    {
      //event listerner for date picker
      drops: "up",
      autoUpdateInput: true,
      singleDatePicker: true, //date picker options
      showDropdowns: true,
      autoApply: true,
    },
    function (mealDay) {
      savePlannedRecipeToLocalStorage(mealDay);
    } //callback function is called one user selects a day to plan meal for
  );

  $("#planMealForToday").on("click", function () {
    savePlannedRecipeToLocalStorage(dayjs());
  }); //if planForTodaybtn is pressed then save the meal for the current day

  function savePlannedRecipeToLocalStorage(mealDay) {
    //function to handel saving the recipe
    var PlannedMealObj = { mealDay: mealDay.format("YYYY-MM-DD"), recipe }; //create the plannedMeal object
    var prevPlannedMeals =
      JSON.parse(localStorage.getItem("plannedMeals")) || []; //get local stoarage, if there is none then retuen an empty array

    localStorage.setItem(
      "plannedMeals",
      JSON.stringify([...prevPlannedMeals, PlannedMealObj])
    ); //save the new meal object into local storage
    showToast(
      "Meal added to calendar!",
      `${recipe.recipe.label}, has been planned for ${dayjs(mealDay).format(
        "D MMM"
      )}`,
      `fa-save`,
      "blue"
    ); //show a toast to the user to let them know that there meal has been saved
  }

  // Event listener for the "Add to Favorites" button
  $("#favBtn").on("click", function () {
    addToFavorites(recipe);
  });
}

function showToast(title, message, icon, color) {
  //Function to show a toast(notifcation) when required
  var toast = $("<div>", {
    //create the toast using html
    id: "toast",
    class: "toast m-2 mt-4",
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: `display: block; position: fixed; bottom: 0; left: 0; z-index: 9999999;"`,
    html: `<div class="toast-header">
          <i style="color: ${color};" class="fas ${icon} m-2" aria-hidden="true"></i>
          <strong class="me-auto">${title}</strong>
          <small>Now</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          ${message}
        </div>`,
  });

  $("body").append(toast); //Show the toast

  setTimeout(() => {
    //Hide the toast after 3 and a half secconds
    $("#toast").remove();
  }, 3500);
}

// Function to add a recipe to the favorites list
function addToFavorites(recipe) {
  // Store favorites in local storage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favExists(recipe._links.self.href, favorites)) return;

  favorites.push(recipe);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  showToast(
    "Meal Saved!",
    `${recipe.recipe.label}, has been saved to favs`,
    `fa-save`,
    "yellow"
  ); //show a toast to the user to let them know that there meal has been saved

  function favExists(href, prevFavs) {
    return prevFavs.some((obj) => obj._links.self.href === href);
  }
}
