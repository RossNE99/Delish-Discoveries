//initialView: 'dayGridWeek' //timeGridDay, dayGridWeek, listWeek, dayGridMonth
var calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
      calendar = new FullCalendar.Calendar(calendarEl, {
      eventClick: function(info) {
        var eventObj = info.event;
          var recipe = eventObj._def.extendedProps.recipe.recipe
          handelRecpieCardClick2(recipe)
      },
      initialView: 'dayGridMonth',
      initialDate: dayjs().format('YYYY-MM-DD'),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      },
      events: createCalData(test)
    });
  
  });

  eventsArray = [
    {
      title: 'All Day Event',
      start: '2023-11-01'
    },
    {
        title: 'All Day Event',
        start: '2023-11-01'
      },
  ];


  var test = [
    {mealDay: dayjs().format('YYYY-MM-DD'),
     recipe: {
      "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_fa83ad3a581f9e848b077c350ef7cd64",
          "label": "Pasta PrimaCherry",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/539/539b0e6e84b4765c2007510797744a96.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICH97YX4%2FbhGVL%2F8bjP91aYQEq3y%2FHYM1UBNlDzGbmhBAiEAoJyQ%2FPNcWphzevNx4cb1dmyvqwdSTG2ULaqaLUXPOEAquAUIfRAAGgwxODcwMTcxNTA5ODYiDIUsoUeUqNgAYRsYKiqVBT2sL4irfldohx7mHDyIaIW2mGOu420mebo%2FENQKVxjtkXLbg6ds0Glzt5C9cU1g65NYhTckytcL4AQLfkmEVjQpnIEpIBkSiAezenK7hXWoN%2BL9BU34N6yN%2BMYrJJOl4E8%2FtvWLBLZt03oFXY%2BwkQedMwnvacOAzse2N3X3%2B%2BKH2qKB6U%2FP6c%2BUod%2F60GXu6ZQd3OUQyU8qTho%2BRt3gE6Jf22AliSC5qwvjlHdDS8wuf67tzvLGUtssK28jZQQCGE8K1L%2FaF%2BVccftWFkLECtvwd3o7ivQ52GNXGnPYzroKr2Yj6nRqluu2YPJyee1Fc5ubY0umRILhy%2Bcr%2F6fklN1B%2Frv0d%2FqwuMTLZ%2BNRD6xy4wGazlTIxgwiLW%2FUKtoqRzrZlZ3mxt1bZ3GCtzWc52cqWexOGk%2B6XVwfpMgxBOUr%2BN3OdycbUBNPxvcTFT%2BWKrkI7JEEz23mVUkrpceT3O%2BGlY%2FCZZNo8hir%2F5Mfvm1EPjklaZ2vG6olO8dMl3OJDF3SoNqbCypIiTp90EcZI9ZuFKpYfNEN0RTF459uREbG%2BqSoH5R9iDnBEdUbn0obAJhvAphQBfiyTtFQBnkL4Po4kmaxpBcLu0OCCGk8KLMh4P3vxYzaxoj%2F14TyhaYKjO5oygLGb3OUe5UDRtI%2Bs59eRB3RLyv7Me1HrZ5kZOO3AkMcEChWW8BYg8hQT3kH8z5hL6bADDr3b7bwVmt9Bms4uf6UxFUHI3UpkWotj%2FM3I5r6DQsLJu89E3yLkTvvnLrmsMPSke6DLfn2py0q29fe2jDJO%2B7qwVB3Q5o7guveGFu7HcgCmMKj%2B0N6GMz1SYhiPT%2Baveu5gSPzAjGcxW4a03UZBOA0QmfZmiz%2F1PRwaQtzuRMwrq76rQY6sQHjUKeuoVmYID0nbj%2BfoKWWn4e%2BxlHkXtz2u%2FshQqXntdS8m3370gWqb7xx7cKwrQrlxdH1e2u4xnRA%2BK3OprBdR5dlTFKhdXoNmwQ2SJADaHYEZOgJTKTVazHV%2BtYVqcaVdahYAHrwZqpHc%2FNMtvlqzwtX6swMt8atALR7DCwEg1dea6b9KLntP1w7pg5uCzlX8rw8Q5fVYOL6ZZBfOHIBAdZzAUB6%2FGVsF0tic2QDKLo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240203T203238Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJQO35BR2%2F20240203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cc8669134e3249fe0731af6c5c67727fe130f064fc346a7bf423420782c48372",
          "images": {
              "THUMBNAIL": {
                  "url": "https://edamam-product-images.s3.amazonaws.com/web-img/539/539b0e6e84b4765c2007510797744a96-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICH97YX4%2FbhGVL%2F8bjP91aYQEq3y%2FHYM1UBNlDzGbmhBAiEAoJyQ%2FPNcWphzevNx4cb1dmyvqwdSTG2ULaqaLUXPOEAquAUIfRAAGgwxODcwMTcxNTA5ODYiDIUsoUeUqNgAYRsYKiqVBT2sL4irfldohx7mHDyIaIW2mGOu420mebo%2FENQKVxjtkXLbg6ds0Glzt5C9cU1g65NYhTckytcL4AQLfkmEVjQpnIEpIBkSiAezenK7hXWoN%2BL9BU34N6yN%2BMYrJJOl4E8%2FtvWLBLZt03oFXY%2BwkQedMwnvacOAzse2N3X3%2B%2BKH2qKB6U%2FP6c%2BUod%2F60GXu6ZQd3OUQyU8qTho%2BRt3gE6Jf22AliSC5qwvjlHdDS8wuf67tzvLGUtssK28jZQQCGE8K1L%2FaF%2BVccftWFkLECtvwd3o7ivQ52GNXGnPYzroKr2Yj6nRqluu2YPJyee1Fc5ubY0umRILhy%2Bcr%2F6fklN1B%2Frv0d%2FqwuMTLZ%2BNRD6xy4wGazlTIxgwiLW%2FUKtoqRzrZlZ3mxt1bZ3GCtzWc52cqWexOGk%2B6XVwfpMgxBOUr%2BN3OdycbUBNPxvcTFT%2BWKrkI7JEEz23mVUkrpceT3O%2BGlY%2FCZZNo8hir%2F5Mfvm1EPjklaZ2vG6olO8dMl3OJDF3SoNqbCypIiTp90EcZI9ZuFKpYfNEN0RTF459uREbG%2BqSoH5R9iDnBEdUbn0obAJhvAphQBfiyTtFQBnkL4Po4kmaxpBcLu0OCCGk8KLMh4P3vxYzaxoj%2F14TyhaYKjO5oygLGb3OUe5UDRtI%2Bs59eRB3RLyv7Me1HrZ5kZOO3AkMcEChWW8BYg8hQT3kH8z5hL6bADDr3b7bwVmt9Bms4uf6UxFUHI3UpkWotj%2FM3I5r6DQsLJu89E3yLkTvvnLrmsMPSke6DLfn2py0q29fe2jDJO%2B7qwVB3Q5o7guveGFu7HcgCmMKj%2B0N6GMz1SYhiPT%2Baveu5gSPzAjGcxW4a03UZBOA0QmfZmiz%2F1PRwaQtzuRMwrq76rQY6sQHjUKeuoVmYID0nbj%2BfoKWWn4e%2BxlHkXtz2u%2FshQqXntdS8m3370gWqb7xx7cKwrQrlxdH1e2u4xnRA%2BK3OprBdR5dlTFKhdXoNmwQ2SJADaHYEZOgJTKTVazHV%2BtYVqcaVdahYAHrwZqpHc%2FNMtvlqzwtX6swMt8atALR7DCwEg1dea6b9KLntP1w7pg5uCzlX8rw8Q5fVYOL6ZZBfOHIBAdZzAUB6%2FGVsF0tic2QDKLo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240203T203238Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJQO35BR2%2F20240203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b01242c49c9b892313c70fdf01e9c9d90d17f78649e04888a6ccd18ea8b68e3f",
                  "width": 100,
                  "height": 100
              },
              "SMALL": {
                  "url": "https://edamam-product-images.s3.amazonaws.com/web-img/539/539b0e6e84b4765c2007510797744a96-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICH97YX4%2FbhGVL%2F8bjP91aYQEq3y%2FHYM1UBNlDzGbmhBAiEAoJyQ%2FPNcWphzevNx4cb1dmyvqwdSTG2ULaqaLUXPOEAquAUIfRAAGgwxODcwMTcxNTA5ODYiDIUsoUeUqNgAYRsYKiqVBT2sL4irfldohx7mHDyIaIW2mGOu420mebo%2FENQKVxjtkXLbg6ds0Glzt5C9cU1g65NYhTckytcL4AQLfkmEVjQpnIEpIBkSiAezenK7hXWoN%2BL9BU34N6yN%2BMYrJJOl4E8%2FtvWLBLZt03oFXY%2BwkQedMwnvacOAzse2N3X3%2B%2BKH2qKB6U%2FP6c%2BUod%2F60GXu6ZQd3OUQyU8qTho%2BRt3gE6Jf22AliSC5qwvjlHdDS8wuf67tzvLGUtssK28jZQQCGE8K1L%2FaF%2BVccftWFkLECtvwd3o7ivQ52GNXGnPYzroKr2Yj6nRqluu2YPJyee1Fc5ubY0umRILhy%2Bcr%2F6fklN1B%2Frv0d%2FqwuMTLZ%2BNRD6xy4wGazlTIxgwiLW%2FUKtoqRzrZlZ3mxt1bZ3GCtzWc52cqWexOGk%2B6XVwfpMgxBOUr%2BN3OdycbUBNPxvcTFT%2BWKrkI7JEEz23mVUkrpceT3O%2BGlY%2FCZZNo8hir%2F5Mfvm1EPjklaZ2vG6olO8dMl3OJDF3SoNqbCypIiTp90EcZI9ZuFKpYfNEN0RTF459uREbG%2BqSoH5R9iDnBEdUbn0obAJhvAphQBfiyTtFQBnkL4Po4kmaxpBcLu0OCCGk8KLMh4P3vxYzaxoj%2F14TyhaYKjO5oygLGb3OUe5UDRtI%2Bs59eRB3RLyv7Me1HrZ5kZOO3AkMcEChWW8BYg8hQT3kH8z5hL6bADDr3b7bwVmt9Bms4uf6UxFUHI3UpkWotj%2FM3I5r6DQsLJu89E3yLkTvvnLrmsMPSke6DLfn2py0q29fe2jDJO%2B7qwVB3Q5o7guveGFu7HcgCmMKj%2B0N6GMz1SYhiPT%2Baveu5gSPzAjGcxW4a03UZBOA0QmfZmiz%2F1PRwaQtzuRMwrq76rQY6sQHjUKeuoVmYID0nbj%2BfoKWWn4e%2BxlHkXtz2u%2FshQqXntdS8m3370gWqb7xx7cKwrQrlxdH1e2u4xnRA%2BK3OprBdR5dlTFKhdXoNmwQ2SJADaHYEZOgJTKTVazHV%2BtYVqcaVdahYAHrwZqpHc%2FNMtvlqzwtX6swMt8atALR7DCwEg1dea6b9KLntP1w7pg5uCzlX8rw8Q5fVYOL6ZZBfOHIBAdZzAUB6%2FGVsF0tic2QDKLo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240203T203238Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJQO35BR2%2F20240203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=19e34b1ede8ce254d0619f084643a55d4d2e5970634a320b92ba74e2c860a1fd",
                  "width": 200,
                  "height": 200
              },
              "REGULAR": {
                  "url": "https://edamam-product-images.s3.amazonaws.com/web-img/539/539b0e6e84b4765c2007510797744a96.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICH97YX4%2FbhGVL%2F8bjP91aYQEq3y%2FHYM1UBNlDzGbmhBAiEAoJyQ%2FPNcWphzevNx4cb1dmyvqwdSTG2ULaqaLUXPOEAquAUIfRAAGgwxODcwMTcxNTA5ODYiDIUsoUeUqNgAYRsYKiqVBT2sL4irfldohx7mHDyIaIW2mGOu420mebo%2FENQKVxjtkXLbg6ds0Glzt5C9cU1g65NYhTckytcL4AQLfkmEVjQpnIEpIBkSiAezenK7hXWoN%2BL9BU34N6yN%2BMYrJJOl4E8%2FtvWLBLZt03oFXY%2BwkQedMwnvacOAzse2N3X3%2B%2BKH2qKB6U%2FP6c%2BUod%2F60GXu6ZQd3OUQyU8qTho%2BRt3gE6Jf22AliSC5qwvjlHdDS8wuf67tzvLGUtssK28jZQQCGE8K1L%2FaF%2BVccftWFkLECtvwd3o7ivQ52GNXGnPYzroKr2Yj6nRqluu2YPJyee1Fc5ubY0umRILhy%2Bcr%2F6fklN1B%2Frv0d%2FqwuMTLZ%2BNRD6xy4wGazlTIxgwiLW%2FUKtoqRzrZlZ3mxt1bZ3GCtzWc52cqWexOGk%2B6XVwfpMgxBOUr%2BN3OdycbUBNPxvcTFT%2BWKrkI7JEEz23mVUkrpceT3O%2BGlY%2FCZZNo8hir%2F5Mfvm1EPjklaZ2vG6olO8dMl3OJDF3SoNqbCypIiTp90EcZI9ZuFKpYfNEN0RTF459uREbG%2BqSoH5R9iDnBEdUbn0obAJhvAphQBfiyTtFQBnkL4Po4kmaxpBcLu0OCCGk8KLMh4P3vxYzaxoj%2F14TyhaYKjO5oygLGb3OUe5UDRtI%2Bs59eRB3RLyv7Me1HrZ5kZOO3AkMcEChWW8BYg8hQT3kH8z5hL6bADDr3b7bwVmt9Bms4uf6UxFUHI3UpkWotj%2FM3I5r6DQsLJu89E3yLkTvvnLrmsMPSke6DLfn2py0q29fe2jDJO%2B7qwVB3Q5o7guveGFu7HcgCmMKj%2B0N6GMz1SYhiPT%2Baveu5gSPzAjGcxW4a03UZBOA0QmfZmiz%2F1PRwaQtzuRMwrq76rQY6sQHjUKeuoVmYID0nbj%2BfoKWWn4e%2BxlHkXtz2u%2FshQqXntdS8m3370gWqb7xx7cKwrQrlxdH1e2u4xnRA%2BK3OprBdR5dlTFKhdXoNmwQ2SJADaHYEZOgJTKTVazHV%2BtYVqcaVdahYAHrwZqpHc%2FNMtvlqzwtX6swMt8atALR7DCwEg1dea6b9KLntP1w7pg5uCzlX8rw8Q5fVYOL6ZZBfOHIBAdZzAUB6%2FGVsF0tic2QDKLo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240203T203238Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJQO35BR2%2F20240203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cc8669134e3249fe0731af6c5c67727fe130f064fc346a7bf423420782c48372",
                  "width": 300,
                  "height": 300
              },
              "LARGE": {
                  "url": "https://edamam-product-images.s3.amazonaws.com/web-img/539/539b0e6e84b4765c2007510797744a96-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICH97YX4%2FbhGVL%2F8bjP91aYQEq3y%2FHYM1UBNlDzGbmhBAiEAoJyQ%2FPNcWphzevNx4cb1dmyvqwdSTG2ULaqaLUXPOEAquAUIfRAAGgwxODcwMTcxNTA5ODYiDIUsoUeUqNgAYRsYKiqVBT2sL4irfldohx7mHDyIaIW2mGOu420mebo%2FENQKVxjtkXLbg6ds0Glzt5C9cU1g65NYhTckytcL4AQLfkmEVjQpnIEpIBkSiAezenK7hXWoN%2BL9BU34N6yN%2BMYrJJOl4E8%2FtvWLBLZt03oFXY%2BwkQedMwnvacOAzse2N3X3%2B%2BKH2qKB6U%2FP6c%2BUod%2F60GXu6ZQd3OUQyU8qTho%2BRt3gE6Jf22AliSC5qwvjlHdDS8wuf67tzvLGUtssK28jZQQCGE8K1L%2FaF%2BVccftWFkLECtvwd3o7ivQ52GNXGnPYzroKr2Yj6nRqluu2YPJyee1Fc5ubY0umRILhy%2Bcr%2F6fklN1B%2Frv0d%2FqwuMTLZ%2BNRD6xy4wGazlTIxgwiLW%2FUKtoqRzrZlZ3mxt1bZ3GCtzWc52cqWexOGk%2B6XVwfpMgxBOUr%2BN3OdycbUBNPxvcTFT%2BWKrkI7JEEz23mVUkrpceT3O%2BGlY%2FCZZNo8hir%2F5Mfvm1EPjklaZ2vG6olO8dMl3OJDF3SoNqbCypIiTp90EcZI9ZuFKpYfNEN0RTF459uREbG%2BqSoH5R9iDnBEdUbn0obAJhvAphQBfiyTtFQBnkL4Po4kmaxpBcLu0OCCGk8KLMh4P3vxYzaxoj%2F14TyhaYKjO5oygLGb3OUe5UDRtI%2Bs59eRB3RLyv7Me1HrZ5kZOO3AkMcEChWW8BYg8hQT3kH8z5hL6bADDr3b7bwVmt9Bms4uf6UxFUHI3UpkWotj%2FM3I5r6DQsLJu89E3yLkTvvnLrmsMPSke6DLfn2py0q29fe2jDJO%2B7qwVB3Q5o7guveGFu7HcgCmMKj%2B0N6GMz1SYhiPT%2Baveu5gSPzAjGcxW4a03UZBOA0QmfZmiz%2F1PRwaQtzuRMwrq76rQY6sQHjUKeuoVmYID0nbj%2BfoKWWn4e%2BxlHkXtz2u%2FshQqXntdS8m3370gWqb7xx7cKwrQrlxdH1e2u4xnRA%2BK3OprBdR5dlTFKhdXoNmwQ2SJADaHYEZOgJTKTVazHV%2BtYVqcaVdahYAHrwZqpHc%2FNMtvlqzwtX6swMt8atALR7DCwEg1dea6b9KLntP1w7pg5uCzlX8rw8Q5fVYOL6ZZBfOHIBAdZzAUB6%2FGVsF0tic2QDKLo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240203T203238Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFJQO35BR2%2F20240203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c2ef70decbed95c7e2c6ab9eadfba68d5e369c8723e76e89a66213c49f04ae82",
                  "width": 600,
                  "height": 600
              }
          },
          "source": "Food52",
          "url": "https://food52.com/recipes/5293-pasta-primacherry",
          "shareAs": "http://www.edamam.com/recipe/pasta-primacherry-fa83ad3a581f9e848b077c350ef7cd64/chicken%2C+pasta%2C+carrots",
          "yield": 4,
          "dietLabels": [],
          "healthLabels": [
              "Egg-Free",
              "Peanut-Free",
              "Tree-Nut-Free",
              "Soy-Free",
              "Fish-Free",
              "Shellfish-Free",
              "Pork-Free",
              "Red-Meat-Free",
              "Crustacean-Free",
              "Celery-Free",
              "Mustard-Free",
              "Sesame-Free",
              "Lupine-Free",
              "Mollusk-Free",
              "Alcohol-Free",
              "Sulfite-Free"
          ],
          "cautions": [
              "Soy",
              "Sulfites"
          ],
          "ingredientLines": [
              "1 cup rigatoni, fusili or rotini pasta",
              "2 tablespoons virgin olive oil",
              "1 cup broccoli florets",
              "1 cup cauliflower",
              "1/2 cup circular sliced carrots",
              "1/2 cup fresh cherries halved",
              "1 tablespoon finely chopped garlic",
              "3/4 cups parmesan cheese",
              "1 cup chicken or vegetable broth",
              "10 ounces cooked chicken strips",
              "1/4 - 1/2 cup fresh basil strips"
          ],
          "ingredients": [
              {
                  "text": "1 cup rigatoni, fusili or rotini pasta",
                  "quantity": 1,
                  "measure": "cup",
                  "food": "rotini pasta",
                  "weight": 105,
                  "foodCategory": "grains",
                  "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                  "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
              },
              {
                  "text": "2 tablespoons virgin olive oil",
                  "quantity": 2,
                  "measure": "tablespoon",
                  "food": "virgin olive oil",
                  "weight": 27,
                  "foodCategory": "Oils",
                  "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                  "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
              },
              {
                  "text": "1 cup broccoli florets",
                  "quantity": 1,
                  "measure": "cup",
                  "food": "broccoli florets",
                  "weight": 71,
                  "foodCategory": "vegetables",
                  "foodId": "food_b5r3hr9b7kn0jtaegq6pgbgyr034",
                  "image": "https://www.edamam.com/food-img/b11/b11b34a0dd535bf7aabeeb5413f24954.jpeg"
              },
              {
                  "text": "1 cup cauliflower",
                  "quantity": 1,
                  "measure": "cup",
                  "food": "cauliflower",
                  "weight": 107,
                  "foodCategory": "vegetables",
                  "foodId": "food_buqfaxubzh6hi5asev8a5aj9sr71",
                  "image": "https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg"
              },
              {
                  "text": "1/2 cup circular sliced carrots",
                  "quantity": 0.5,
                  "measure": "cup",
                  "food": "carrots",
                  "weight": 61,
                  "foodCategory": "vegetables",
                  "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                  "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
              },
              {
                  "text": "1/2 cup fresh cherries halved",
                  "quantity": 0.5,
                  "measure": "cup",
                  "food": "cherries",
                  "weight": 77,
                  "foodCategory": "fruit",
                  "foodId": "food_bv3hog1bd5qa4oafi7lb3bjz8i92",
                  "image": "https://www.edamam.com/food-img/34b/34b23d901752b022d6ab1ee6f9ed0b74.jpg"
              },
              {
                  "text": "1 tablespoon finely chopped garlic",
                  "quantity": 1,
                  "measure": "tablespoon",
                  "food": "garlic",
                  "weight": 8.499999999856291,
                  "foodCategory": "vegetables",
                  "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                  "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
              },
              {
                  "text": "3/4 cups parmesan cheese",
                  "quantity": 0.75,
                  "measure": "cup",
                  "food": "parmesan cheese",
                  "weight": 111.52968750000001,
                  "foodCategory": "Cheese",
                  "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                  "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
              },
              {
                  "text": "1 cup chicken or vegetable broth",
                  "quantity": 1,
                  "measure": "cup",
                  "food": "vegetable broth",
                  "weight": 227,
                  "foodCategory": "Vegan products",
                  "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
                  "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
              },
              {
                  "text": "10 ounces cooked chicken strips",
                  "quantity": 10,
                  "measure": "ounce",
                  "food": "chicken strips",
                  "weight": 283.49523125,
                  "foodCategory": "sandwhiches",
                  "foodId": "food_bpbsk7zaearxssa39q2fia84qudv",
                  "image": "https://www.edamam.com/food-img/cc3/cc359f770f8f4d9ab2eeb40cc7bf6768.jpg"
              },
              {
                  "text": "1/4 - 1/2 cup fresh basil strips",
                  "quantity": 0.375,
                  "measure": "cup",
                  "food": "fresh basil",
                  "weight": 9,
                  "foodCategory": "Condiments and sauces",
                  "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
                  "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
              }
          ],
          "calories": 1970.7701909565658,
          "totalCO2Emissions": 6128.540056749429,
          "co2EmissionsClass": "F",
          "totalWeight": 1087.5249187498564,
          "totalTime": 49,
          "cuisineType": [
              "italian"
          ],
          "mealType": [
              "lunch/dinner"
          ],
          "dishType": [
              "main course"
          ],
          "totalNutrients": {
              "ENERC_KCAL": {
                  "label": "Energy",
                  "quantity": 1970.7701909565658,
                  "unit": "kcal"
              },
              "FAT": {
                  "label": "Fat",
                  "quantity": 97.19136145216928,
                  "unit": "g"
              },
              "FASAT": {
                  "label": "Saturated",
                  "quantity": 27.83222269564487,
                  "unit": "g"
              },
              "FATRN": {
                  "label": "Trans",
                  "quantity": 0.14741752025,
                  "unit": "g"
              },
              "FAMS": {
                  "label": "Monounsaturated",
                  "quantity": 42.130759920134984,
                  "unit": "g"
              },
              "FAPU": {
                  "label": "Polyunsaturated",
                  "quantity": 20.769644463294643,
                  "unit": "g"
              },
              "CHOCDF": {
                  "label": "Carbs",
                  "quantity": 161.2549330042424,
                  "unit": "g"
              },
              "CHOCDF.net": {
                  "label": "Carbohydrates (net)",
                  "quantity": 146.9765891215654,
                  "unit": "g"
              },
              "FIBTG": {
                  "label": "Fiber",
                  "quantity": 14.278343882676984,
                  "unit": "g"
              },
              "SUGAR": {
                  "label": "Sugars",
                  "quantity": 20.135464404778563,
                  "unit": "g"
              },
              "PROCNT": {
                  "label": "Protein",
                  "quantity": 114.45538947562085,
                  "unit": "g"
              },
              "CHOLE": {
                  "label": "Cholesterol",
                  "quantity": 211.91789849999998,
                  "unit": "mg"
              },
              "NA": {
                  "label": "Sodium",
                  "quantity": 3634.070779207476,
                  "unit": "mg"
              },
              "CA": {
                  "label": "Calcium",
                  "quantity": 1514.4758464794697,
                  "unit": "mg"
              },
              "MG": {
                  "label": "Magnesium",
                  "quantity": 244.53206123157406,
                  "unit": "mg"
              },
              "K": {
                  "label": "Potassium",
                  "quantity": 2383.0630397215737,
                  "unit": "mg"
              },
              "FE": {
                  "label": "Iron",
                  "quantity": 6.515735228862557,
                  "unit": "mg"
              },
              "ZN": {
                  "label": "Zinc",
                  "quantity": 7.5418076841033335,
                  "unit": "mg"
              },
              "P": {
                  "label": "Phosphorus",
                  "quantity": 1923.1574065294203,
                  "unit": "mg"
              },
              "VITA_RAE": {
                  "label": "Vitamin A",
                  "quantity": 1421.6705838514401,
                  "unit": "µg"
              },
              "VITC": {
                  "label": "Vitamin C",
                  "quantity": 134.75420957276518,
                  "unit": "mg"
              },
              "THIA": {
                  "label": "Thiamin (B1)",
                  "quantity": 0.6326806524997125,
                  "unit": "mg"
              },
              "RIBF": {
                  "label": "Riboflavin (B2)",
                  "quantity": 1.170285418917342,
                  "unit": "mg"
              },
              "NIA": {
                  "label": "Niacin (B3)",
                  "quantity": 27.280668499733995,
                  "unit": "mg"
              },
              "VITB6A": {
                  "label": "Vitamin B6",
                  "quantity": 2.014993703698218,
                  "unit": "mg"
              },
              "FOLDFE": {
                  "label": "Folate equivalent (total)",
                  "quantity": 225.6327687427057,
                  "unit": "µg"
              },
              "FOLFD": {
                  "label": "Folate (food)",
                  "quantity": 197.2832456177057,
                  "unit": "µg"
              },
              "FOLAC": {
                  "label": "Folic acid",
                  "quantity": 17.009713875,
                  "unit": "µg"
              },
              "VITB12": {
                  "label": "Vitamin B12",
                  "quantity": 1.792087317,
                  "unit": "µg"
              },
              "VITD": {
                  "label": "Vitamin D",
                  "quantity": 1.1254697200000001,
                  "unit": "µg"
              },
              "TOCPHA": {
                  "label": "Vitamin E",
                  "quantity": 13.883172542864884,
                  "unit": "mg"
              },
              "VITK1": {
                  "label": "Vitamin K",
                  "quantity": 108.16549750403757,
                  "unit": "µg"
              },
              "WATER": {
                  "label": "Water",
                  "quantity": 695.5140898661158,
                  "unit": "g"
              }
          },
          "totalDaily": {
              "ENERC_KCAL": {
                  "label": "Energy",
                  "quantity": 98.53850954782828,
                  "unit": "%"
              },
              "FAT": {
                  "label": "Fat",
                  "quantity": 149.5251714648758,
                  "unit": "%"
              },
              "FASAT": {
                  "label": "Saturated",
                  "quantity": 139.16111347822434,
                  "unit": "%"
              },
              "CHOCDF": {
                  "label": "Carbs",
                  "quantity": 53.75164433474747,
                  "unit": "%"
              },
              "FIBTG": {
                  "label": "Fiber",
                  "quantity": 57.113375530707934,
                  "unit": "%"
              },
              "PROCNT": {
                  "label": "Protein",
                  "quantity": 228.9107789512417,
                  "unit": "%"
              },
              "CHOLE": {
                  "label": "Cholesterol",
                  "quantity": 70.63929949999999,
                  "unit": "%"
              },
              "NA": {
                  "label": "Sodium",
                  "quantity": 151.41961580031148,
                  "unit": "%"
              },
              "CA": {
                  "label": "Calcium",
                  "quantity": 151.44758464794697,
                  "unit": "%"
              },
              "MG": {
                  "label": "Magnesium",
                  "quantity": 58.22191934085096,
                  "unit": "%"
              },
              "K": {
                  "label": "Potassium",
                  "quantity": 50.703468930246245,
                  "unit": "%"
              },
              "FE": {
                  "label": "Iron",
                  "quantity": 36.19852904923643,
                  "unit": "%"
              },
              "ZN": {
                  "label": "Zinc",
                  "quantity": 68.56188803730304,
                  "unit": "%"
              },
              "P": {
                  "label": "Phosphorus",
                  "quantity": 274.7367723613458,
                  "unit": "%"
              },
              "VITA_RAE": {
                  "label": "Vitamin A",
                  "quantity": 157.96339820571558,
                  "unit": "%"
              },
              "VITC": {
                  "label": "Vitamin C",
                  "quantity": 149.72689952529464,
                  "unit": "%"
              },
              "THIA": {
                  "label": "Thiamin (B1)",
                  "quantity": 52.723387708309374,
                  "unit": "%"
              },
              "RIBF": {
                  "label": "Riboflavin (B2)",
                  "quantity": 90.02195530133399,
                  "unit": "%"
              },
              "NIA": {
                  "label": "Niacin (B3)",
                  "quantity": 170.50417812333748,
                  "unit": "%"
              },
              "VITB6A": {
                  "label": "Vitamin B6",
                  "quantity": 154.99951566909368,
                  "unit": "%"
              },
              "FOLDFE": {
                  "label": "Folate equivalent (total)",
                  "quantity": 56.40819218567643,
                  "unit": "%"
              },
              "VITB12": {
                  "label": "Vitamin B12",
                  "quantity": 74.670304875,
                  "unit": "%"
              },
              "VITD": {
                  "label": "Vitamin D",
                  "quantity": 7.503131466666668,
                  "unit": "%"
              },
              "TOCPHA": {
                  "label": "Vitamin E",
                  "quantity": 92.55448361909923,
                  "unit": "%"
              },
              "VITK1": {
                  "label": "Vitamin K",
                  "quantity": 90.13791458669797,
                  "unit": "%"
              }
          },
          "digest": [
              {
                  "label": "Fat",
                  "tag": "FAT",
                  "schemaOrgTag": "fatContent",
                  "total": 97.19136145216928,
                  "hasRDI": true,
                  "daily": 149.5251714648758,
                  "unit": "g",
                  "sub": [
                      {
                          "label": "Saturated",
                          "tag": "FASAT",
                          "schemaOrgTag": "saturatedFatContent",
                          "total": 27.83222269564487,
                          "hasRDI": true,
                          "daily": 139.16111347822434,
                          "unit": "g"
                      },
                      {
                          "label": "Trans",
                          "tag": "FATRN",
                          "schemaOrgTag": "transFatContent",
                          "total": 0.14741752025,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Monounsaturated",
                          "tag": "FAMS",
                          "schemaOrgTag": null,
                          "total": 42.130759920134984,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Polyunsaturated",
                          "tag": "FAPU",
                          "schemaOrgTag": null,
                          "total": 20.769644463294643,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              {
                  "label": "Carbs",
                  "tag": "CHOCDF",
                  "schemaOrgTag": "carbohydrateContent",
                  "total": 161.2549330042424,
                  "hasRDI": true,
                  "daily": 53.75164433474747,
                  "unit": "g",
                  "sub": [
                      {
                          "label": "Carbs (net)",
                          "tag": "CHOCDF.net",
                          "schemaOrgTag": null,
                          "total": 146.9765891215654,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Fiber",
                          "tag": "FIBTG",
                          "schemaOrgTag": "fiberContent",
                          "total": 14.278343882676984,
                          "hasRDI": true,
                          "daily": 57.113375530707934,
                          "unit": "g"
                      },
                      {
                          "label": "Sugars",
                          "tag": "SUGAR",
                          "schemaOrgTag": "sugarContent",
                          "total": 20.135464404778563,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Sugars, added",
                          "tag": "SUGAR.added",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              {
                  "label": "Protein",
                  "tag": "PROCNT",
                  "schemaOrgTag": "proteinContent",
                  "total": 114.45538947562085,
                  "hasRDI": true,
                  "daily": 228.9107789512417,
                  "unit": "g"
              },
              {
                  "label": "Cholesterol",
                  "tag": "CHOLE",
                  "schemaOrgTag": "cholesterolContent",
                  "total": 211.91789849999998,
                  "hasRDI": true,
                  "daily": 70.63929949999999,
                  "unit": "mg"
              },
              {
                  "label": "Sodium",
                  "tag": "NA",
                  "schemaOrgTag": "sodiumContent",
                  "total": 3634.070779207476,
                  "hasRDI": true,
                  "daily": 151.41961580031148,
                  "unit": "mg"
              },
              {
                  "label": "Calcium",
                  "tag": "CA",
                  "schemaOrgTag": null,
                  "total": 1514.4758464794697,
                  "hasRDI": true,
                  "daily": 151.44758464794697,
                  "unit": "mg"
              },
              {
                  "label": "Magnesium",
                  "tag": "MG",
                  "schemaOrgTag": null,
                  "total": 244.53206123157406,
                  "hasRDI": true,
                  "daily": 58.22191934085096,
                  "unit": "mg"
              },
              {
                  "label": "Potassium",
                  "tag": "K",
                  "schemaOrgTag": null,
                  "total": 2383.0630397215737,
                  "hasRDI": true,
                  "daily": 50.703468930246245,
                  "unit": "mg"
              },
              {
                  "label": "Iron",
                  "tag": "FE",
                  "schemaOrgTag": null,
                  "total": 6.515735228862557,
                  "hasRDI": true,
                  "daily": 36.19852904923643,
                  "unit": "mg"
              },
              {
                  "label": "Zinc",
                  "tag": "ZN",
                  "schemaOrgTag": null,
                  "total": 7.5418076841033335,
                  "hasRDI": true,
                  "daily": 68.56188803730304,
                  "unit": "mg"
              },
              {
                  "label": "Phosphorus",
                  "tag": "P",
                  "schemaOrgTag": null,
                  "total": 1923.1574065294203,
                  "hasRDI": true,
                  "daily": 274.7367723613458,
                  "unit": "mg"
              },
              {
                  "label": "Vitamin A",
                  "tag": "VITA_RAE",
                  "schemaOrgTag": null,
                  "total": 1421.6705838514401,
                  "hasRDI": true,
                  "daily": 157.96339820571558,
                  "unit": "µg"
              },
              {
                  "label": "Vitamin C",
                  "tag": "VITC",
                  "schemaOrgTag": null,
                  "total": 134.75420957276518,
                  "hasRDI": true,
                  "daily": 149.72689952529464,
                  "unit": "mg"
              },
              {
                  "label": "Thiamin (B1)",
                  "tag": "THIA",
                  "schemaOrgTag": null,
                  "total": 0.6326806524997125,
                  "hasRDI": true,
                  "daily": 52.723387708309374,
                  "unit": "mg"
              },
              {
                  "label": "Riboflavin (B2)",
                  "tag": "RIBF",
                  "schemaOrgTag": null,
                  "total": 1.170285418917342,
                  "hasRDI": true,
                  "daily": 90.02195530133399,
                  "unit": "mg"
              },
              {
                  "label": "Niacin (B3)",
                  "tag": "NIA",
                  "schemaOrgTag": null,
                  "total": 27.280668499733995,
                  "hasRDI": true,
                  "daily": 170.50417812333748,
                  "unit": "mg"
              },
              {
                  "label": "Vitamin B6",
                  "tag": "VITB6A",
                  "schemaOrgTag": null,
                  "total": 2.014993703698218,
                  "hasRDI": true,
                  "daily": 154.99951566909368,
                  "unit": "mg"
              },
              {
                  "label": "Folate equivalent (total)",
                  "tag": "FOLDFE",
                  "schemaOrgTag": null,
                  "total": 225.6327687427057,
                  "hasRDI": true,
                  "daily": 56.40819218567643,
                  "unit": "µg"
              },
              {
                  "label": "Folate (food)",
                  "tag": "FOLFD",
                  "schemaOrgTag": null,
                  "total": 197.2832456177057,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "µg"
              },
              {
                  "label": "Folic acid",
                  "tag": "FOLAC",
                  "schemaOrgTag": null,
                  "total": 17.009713875,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "µg"
              },
              {
                  "label": "Vitamin B12",
                  "tag": "VITB12",
                  "schemaOrgTag": null,
                  "total": 1.792087317,
                  "hasRDI": true,
                  "daily": 74.670304875,
                  "unit": "µg"
              },
              {
                  "label": "Vitamin D",
                  "tag": "VITD",
                  "schemaOrgTag": null,
                  "total": 1.1254697200000001,
                  "hasRDI": true,
                  "daily": 7.503131466666668,
                  "unit": "µg"
              },
              {
                  "label": "Vitamin E",
                  "tag": "TOCPHA",
                  "schemaOrgTag": null,
                  "total": 13.883172542864884,
                  "hasRDI": true,
                  "daily": 92.55448361909923,
                  "unit": "mg"
              },
              {
                  "label": "Vitamin K",
                  "tag": "VITK1",
                  "schemaOrgTag": null,
                  "total": 108.16549750403757,
                  "hasRDI": true,
                  "daily": 90.13791458669797,
                  "unit": "µg"
              },
              {
                  "label": "Sugar alcohols",
                  "tag": "Sugar.alcohol",
                  "schemaOrgTag": null,
                  "total": 0,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
              },
              {
                  "label": "Water",
                  "tag": "WATER",
                  "schemaOrgTag": null,
                  "total": 695.5140898661158,
                  "hasRDI": false,
                  "daily": 0,
                  "unit": "g"
              }
          ]
      },
      "_links": {
          "self": {
              "href": "https://api.edamam.com/api/recipes/v2/fa83ad3a581f9e848b077c350ef7cd64?type=public&app_id=8e8e1272&app_key=708b1490ccba3fe81fef84be76d47774",
              "title": "Self"
          }
      }
  }
    }
  ]

  //console.log(createCalData(test))

  function createCalData(ls){
    var formattedDataArray = []
    ls.forEach(plannedMeal => {
      var formattedData = {
        start: plannedMeal.mealDay,
        title: plannedMeal.recipe.recipe.label,
        recipe: plannedMeal.recipe,
      }
      formattedDataArray.push(formattedData)
    });
    return formattedDataArray
  }


var addToCalenderBtn = $("#addToCalendarBtn");



function writeOnCalendar() {
    eventsArray.push(
        {
            title: "Rice-Milk Rice Pudding", 
            start:  dayjs().format('YYYY-MM-DD')
        }
    )

      }

console.log(dayjs().format('YYYY-MM-DD'));



function handelRecpieCardClick2(recipe) {

  var {image, label, totalTime, calories, dietLabels, cuisineType, dishType, yield, ingredientLines, url} = recipe
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

  renderGraph(recipe, true)
  $('#recipeModal').modal('show');
}