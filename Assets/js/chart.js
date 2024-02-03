const ctx = document.getElementById('myChart'); //gets chart by ID from html page

function renderGraph(data, test=false) {
    if (!data)  return

    var existingChart = Chart.getChart("myChart");
    if (existingChart) {
        existingChart.destroy();
    }
   
    if(!test){
    var protein = data.recipe.totalNutrients.PROCNT;
    var carbs = data.recipe.totalNutrients.CHOCDF;
    var fat = data.recipe.totalNutrients.FAT;
    var fiber = data.recipe.totalNutrients.FIBTG;
    var sugars = data.recipe.totalNutrients.SUGAR;
    var sodium = data.recipe.totalNutrients.NA;
    } else {
        var protein = data.totalNutrients.PROCNT;
        var carbs = data.totalNutrients.CHOCDF;
        var fat = data.totalNutrients.FAT;
        var fiber = data.totalNutrients.FIBTG;
        var sugars = data.totalNutrients.SUGAR;
        var sodium = data.totalNutrients.NA;
    }

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
