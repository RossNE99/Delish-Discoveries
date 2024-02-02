const ctx = document.getElementById('myChart'); //gets chart by ID from html page

function renderGraph(data) {
    if (!data)  return
    
    //console.log(data);
    //console.log(data.recipe.calories);


    var existingChart = Chart.getChart("myChart");
    if (existingChart) {
        existingChart.destroy();
    }
   
    var protein = data.recipe.totalNutrients.PROCNT;
    var carbs = data.recipe.totalNutrients.CHOCDF;
    var fat = data.recipe.totalNutrients.FAT;
    var fiber = data.recipe.totalNutrients.FIBTG;
    var sugars = data.recipe.totalNutrients.SUGAR;
    var sodium = data.recipe.totalNutrients.NA;



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
