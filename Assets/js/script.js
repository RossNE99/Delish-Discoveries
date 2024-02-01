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


    function renderRecipeList(recipes){
        console.log(recipes)
        $("#recipe-list").empty(); //remove anything thats currently in the recipe-list div
        $.each(recipes.hits, function(index, recipe){   //for each recipe create a recipe card
            var {image, label, totalTime, calories, dietLabels} = recipe.recipe  //destructute 
           
            var recipeCard = $("<div>", { //create the parent div for the recipe card
                class:"col", // add classes to the recipe card
                html: `
                    <div class="card m-2 d-flex flex-wrap row">
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
    }


    function handelSearch(e){
        var ingredientsSearched = $("#ingredientsSearch").val()
        fetchData(ingredientsSearched, renderRecipeList, notworked)
    }
    
    $("#searchBtn").on("click", handelSearch)

