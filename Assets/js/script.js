var nextPageLink;

function fetchData(ingredients , successCallback, errorCallback, nextPageLink) {    //Function that is used to fetch the data 
    
    var APIKey = "708b1490ccba3fe81fef84be76d47774";    //API key 
    var APPID = "8e8e1272"   //API APP ID 
    var baseURL = "https://api.edamam.com/api/recipes/v2?type=public"    //Base URL to get the data from

    if(nextPageLink){
        if($("#mealCardSection").hasClass("d-hide")) return
        fetch(nextPageLink) //retreve data
        .then(response => { //if responce isnt okay then throw and error
            if (!response.ok) {
                throw new Error('Something went wrong :(');
            }
        return response.json(); //return the responce in a parsed form
        })
        .then(data => successCallback(data))   //call the passed in successCallback function
        .catch(error => errorCallback(error)); //if an error is thrown the call the passed In Error Function 
        return
    }
    
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

    function fetchError(error){
        console.log(error)
    }


    const uniqueKeysSet = new Set(); //Create a Set to store unique keys
    var loadedRecipes =[];  //all the repices loaded onto the page
    function renderRecipeList(recipes){
        nextPageLink = recipes._links.next.href
       //==================================================================Section to avoid dupes in the infinti loading=======================================================
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
    }


    function handelSearch(e){
        var ingredientsSearched = $("#ingredientsSearch").val()
        if(!ingredientsSearched || ingredientsSearched ==="") return
        loadedRecipes = []
        uniqueKeysSet.clear()
        nextPageLink = null
        fetchData(ingredientsSearched, renderRecipeList, fetchError)
    }

    function handelCalBtnClick(e) {
        $("#mealCardSection, #heroSection, #subscription, #reviews, #favoritesSection").addClass("d-none")
        $("#calendarSection").removeClass("d-none")
        $("#homeBtn, #aboutUsBtn, #favoritesSection").removeClass("active")
        $("#calendarBtn").addClass("active")
        rednderCal()
    }

    function handelHomeBtnClick(e){
        $("#mealCardSection, #heroSection").removeClass("d-none")
        $("#calendarSection, #subscription, #reviews, #favoritesSection").addClass("d-none")
        $("#calendarBtn, #aboutUsBtn, #FavoritesNavBtn").removeClass("active")
        $("#homeBtn").addClass("active")
    }

    function handelAboutUsBtnClick(e) {
        $("#mealCardSection, #heroSection, #calendarSection, #favoritesSection").addClass("d-none")
        $("#reviews, #subscription").removeClass("d-none")
        $("#calendarBtn, #homeBtn, #FavoritesNavBtn").removeClass("active")
        $("#aboutUsBtn").addClass("active")
    }

    function handelFavBtnClick(e) {
        $("#mealCardSection, #heroSection, #calendarSection").addClass("d-none")
        $("#favoritesSection").removeClass("d-none")
        $("#calendarBtn, #homeBtn").removeClass("active")
        $("#FavoritesNavBtn").addClass("active")
        renderFavsList()
    }

    $("#searchBtn").on("click", handelSearch)
    $("#recipe-list").on("click", ".card", openRecipeModal)

    $("#homeBtn").on("click", handelHomeBtnClick)
    $("#calendarBtn").on("click", handelCalBtnClick)

    $("#aboutUsBtn").on("click", handelAboutUsBtnClick)

    $("#FavoritesNavBtn").on("click", handelFavBtnClick)

    $('#recipeModal').on('hidden.bs.modal', function (e) {
        $('#recipeModal').modal('dispose')
        console.log("test")
      })

    $(window).scroll(function() {   
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            if(nextPageLink) fetchData(null, renderRecipeList, fetchError, nextPageLink)
        }
     });
