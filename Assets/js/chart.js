const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Protein', 'Carbohydrate', 'Fat', 'Fiber', 'Sugar', 'Salt'],
        datasets: [{
            label: 'Grams',
            data: [12, 19, 3, 5, 2, 3],
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


fetchData(testIngredients.join(","), renderRecipeList, notworked);

function renderRecipeList(data) {
    if (data && data.count) {
        console.log(data);
    }
    console.log(data.hits[0].recipe.calories);
}
