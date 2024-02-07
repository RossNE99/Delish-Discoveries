function openRecipeModal(e, recipe) {

    if(!recipe){
        var recipeId = $(e.currentTarget).data("recipeid")
        var recipe = loadedRecipes.find(recipe => recipe._links.self.href === recipeId);    //This probs inst tbe most efficent way but just send it
    } else {
        $("#planMealDateInput").addClass
    }

    var {image, label, totalTime, calories, dietLabels, cuisineType, dishType, yield, ingredientLines, url} = recipe.recipe
    $("#recipeModalLabel").text(label)
    var modalImg = $("<img>", {src: image, alt: label, style: "object-fit: contain; height: 100% ;width: 100%;"})
    $("#recipeModalBodyImg").empty().append(modalImg)
    var recipeInfo =$("<div>", {
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
    $("#recipeInfo").empty().append(recipeInfo)

    $("#ingredientsList").empty()
    $.each(ingredientLines, function (indexInArray, ingredient) { 
        var ingredientLI = $("<li>", {
            class:"list-group-item" ,
            text: ingredient,
        })
        $("#ingredientsList").append(ingredientLI)
    });

    $("#viewCookingInstructionsBtn").on('click', function(){ window.open(url, '_blank')});

    renderGraph(recipe)
    $('#recipeModal').modal('show');

    $('#planMealDateInput').daterangepicker({
        drops: "up",
        autoUpdateInput: true,
        singleDatePicker: true,
        showDropdowns: true,
        autoApply: true,
      }, function(mealDay){ savePlannedRecipeToLocalStorage(mealDay)}
    )

    $("#planMealForToday").on("click", function() {savePlannedRecipeToLocalStorage(dayjs())})

    function savePlannedRecipeToLocalStorage(mealDay) {
        var PlannedMealObj = {mealDay: mealDay.format("YYYY-MM-DD"), recipe}
        var prevPlannedMeals = JSON.parse(localStorage.getItem("plannedMeals")) || []
        localStorage.setItem("plannedMeals", JSON.stringify([...prevPlannedMeals, PlannedMealObj]))
        showToast("Meal added to calendar!", `${recipe.recipe.label}, has been planned for ${dayjs(mealDay).format("D MMM")}`, `fa-save`, 'blue') //show a toast to the user to let them know that there task has been saved
        }

}


function showToast(title, message, icon, color){    //Function to show a toast(notifcation) when required
    var toast = $("<div>",{     //create the toast using html
        id: "toast", class: "toast m-2 mt-4", role: "alert", "aria-live": "assertive", "aria-atomic":"true", style: `display: block; position: fixed; bottom: 0; left: 0; z-index: 9999999;"`,
        html:
        `<div class="toast-header">
          <i style="color: ${color};" class="fas ${icon} m-2" aria-hidden="true"></i>
          <strong class="me-auto">${title}</strong>
          <small>Now</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          ${message}
        </div>`
    })
    
    $("body").append(toast) //Show the toast

    setTimeout(() => {  //Hide the toast after 3 and a half secconds
        $("#toast").remove()
    },3500)
}