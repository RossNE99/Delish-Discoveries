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

    fetchData(testIngredients.join(","), worked, notworked)

    function worked(data){
        console.log(data)
    }

    function notworked(error){
        console.log(error)
    }

