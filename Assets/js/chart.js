const ctx = document.getElementById('myChart'); //gets chart by ID from html page

function renderGraph(data) {
    if (!data)  return

    var existingChart = Chart.getChart("myChart");  
    if (existingChart) {    //if a chart already exists then distory it
        existingChart.destroy();
    }
   
    //create more friendly variable names
    var protein = data.recipe.totalNutrients.PROCNT;
    var carbs = data.recipe.totalNutrients.CHOCDF;
    var fat = data.recipe.totalNutrients.FAT;
    var fiber = data.recipe.totalNutrients.FIBTG;
    var sugars = data.recipe.totalNutrients.SUGAR;
    var sodium = data.recipe.totalNutrients.NA;

    new Chart(ctx, {    //create a new chart
      type: 'bar',
      data: {
          labels: ['Protein', 'Carbs', 'Fat', 'Fiber', 'Sugars', 'Sodium'],
          datasets: [{
              label: 'Grams',
              data: [protein.quantity, carbs.quantity, fat.quantity, fiber.quantity, sugars.quantity, sodium.quantity/1000], //pass in the data
              borderWidth: 1
          }]
      },
      options: {
          scales: { //chart options 
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}
