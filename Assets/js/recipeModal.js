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

    $("#viewCookingInstructionsBtn").attr('onClick', `location.href='${url}'`);

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
        console.log(mealDay)
        var PlannedMealObj = {mealDay: mealDay.format("YYYY-MM-DD"), recipe}
        var prevPlannedMeals = JSON.parse(localStorage.getItem("plannedMeals")) || []
        localStorage.setItem("plannedMeals", JSON.stringify([...prevPlannedMeals, PlannedMealObj]))
        console.log(JSON.parse(localStorage.getItem("plannedMeals")))
        }

}