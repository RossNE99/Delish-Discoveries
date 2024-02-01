const ctx = document.getElementById('myChart'); //gets chart by ID from html page

fetchData(testIngredients.join(","), renderGraph, notworked);


function renderGraph(data) {
    if (data && data.count) {
        console.log(data);
    }
    console.log(data.hits[0].recipe.calories);
   
    var protein = data.hits[0].recipe.totalNutrients.PROCNT;
    var carbs = data.hits[0].recipe.totalNutrients.CHOCDF;
    var fat = data.hits[0].recipe.totalNutrients.FAT;
    var fiber = data.hits[0].recipe.totalNutrients.FIBTG;
    var sugars = data.hits[0].recipe.totalNutrients.SUGAR;
    var sodium = data.hits[0].recipe.totalNutrients.NA;



    new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Protein', 'Carbs', 'Fat', 'Fiber', 'Sugars', 'Sodium'],
          datasets: [{
              label: 'Grams',
              data: [protein.quantity, carbs.quantity, fat.quantity, fiber.quantity, sugars.quantity, sodium.quantity/1000],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}
