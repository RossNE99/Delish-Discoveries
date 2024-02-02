function fetchData(ingredients , successCallback, errorCallback) {    //Function that is used to fetch the data 
    
    var APIKey = "708b1490ccba3fe81fef84be76d47774";    //API key 
    var APPID = "8e8e1272"   //API APP ID 
    var baseURL = "https://api.edamam.com/api/recipes/v2?type=public"    //Base URL to get the data from
    
    fetch(`${baseURL}&q=${ingredients}&app_id=${APPID}&app_key=${APIKey}`) //retreve data
        .then(response => { //if responce isnt okay then throw and error
            if (!response.ok) {
                throw new Error('Something went wrong :(');
            }
        return response.json(); //return the responce in a parsed form
        })
        .then(data => successCallback(data))   //call the passed in successCallback function
        .catch(error => errorCallback(error)); //if an error is thrown the call the passed In Error Function
    }


    var testIngredients = ["Chicken", "Tomatos", "Mushrooms"] //Test Ingredients

    //fetchData(testIngredients.join(","), renderRecipeList, notworked)

    function notworked(error){
        console.log(error)
    }


    const uniqueKeysSet = new Set(); //Create a Set to store unique keys
    var loadedRecipes =[];  //all the repices loaded onto the page
    function renderRecipeList(recipes){
    //    console.log(recipes)
       //==================================================================Section to avoid dupes in the infinti loading======================================================= !!!(infinti loading still needs to be added but this was needed as a blueprint)
        // Filter out duplicates from loadedRecipes
        const uniqueLoadedRecipes = recipes.hits.filter(recipe => {
            // Get the unique key for each object
            const uniqueKey = recipe._links.self.href;
        
            // Check if the key is already in the Set
            if (!uniqueKeysSet.has(uniqueKey)) {
            // If not, add it to the Set and return true (keep the object)
            uniqueKeysSet.add(uniqueKey);
            return true;
            }
            // If the key is already in the Set, return false (filter out the object)
            return false;
        });
        //==================================================================Section to avoid dupes in the infinti loading=======================================================
        //!!!(infinti loading still needs to be added but this was needed as a blueprint)


        loadedRecipes = [...loadedRecipes, ...uniqueLoadedRecipes] //merage loadedRecipes and uniqueLoadedRecipes form the last fetch
    
        $("#recipe-list").empty(); //remove anything thats currently in the recipe-list div
        $.each(loadedRecipes, function(index, recipe){   //for each recipe create a recipe card

            const uniqueKey = recipe._links.self.href
            uniqueKeysSet.add(uniqueKey)

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
            $("#recipe-list").append(recipeCard) //add recipe card to the recipe card div
        })
      //  console.log(uniqueKeysSet)
      console.log(loadedRecipes)
    }


    function handelSearch(e){
        var ingredientsSearched = $("#ingredientsSearch").val()
        if(!ingredientsSearched || ingredientsSearched ==="") return
        fetchData(ingredientsSearched, renderRecipeList, notworked)
    }

    function handelRecpieCardClick(e) {
        //console.log($(e.currentTarget)[0])
        //console.log(e.currentTarget)
        //if(!$(e.target).hasClass("card")) return
        var recipeId = $(e.currentTarget).data("recipeid")

        var recipe = loadedRecipes.find(recipe => recipe._links.self.href === recipeId);    //This probs inst tbe most efficent way but just send it

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
            console.log(ingredient)
            var ingredientLI = $("<li>", {
                class:"list-group-item" ,
                text: ingredient,
            })
            $("#ingredientsList").append(ingredientLI)
        });

        $("#viewCookingInstructionsBtn").attr('onClick', `location.href='${url}'`);

        renderGraph(recipe)
        $('#recipeModal').modal('show');
        console.log(recipe)
       // $("#recipeModalBody").text(JSON.stringify())
    }

    $("#searchBtn").on("click", handelSearch)

    $("#recipe-list").on("click", ".card", handelRecpieCardClick)