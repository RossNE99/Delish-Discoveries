var calendar
function rednderCal() {
    var calendarEl = document.getElementById('calendar');
  
      calendar = new FullCalendar.Calendar(calendarEl, {
      eventClick: function(info) {
        var eventObj = info.event;
          var recipe = eventObj._def.extendedProps.recipe.recipe
          openRecipeModal(null, {recipe})
      },
      initialView: 'dayGridMonth',
      initialDate: dayjs().format('YYYY-MM-DD'),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      events: createCalData(JSON.parse(localStorage.getItem("plannedMeals")) || [])
    });
    calendar.render();
  };

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

