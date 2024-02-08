var calendar
function rednderCal() { //cunction to render the callender to the page
    var calendarEl = document.getElementById('calendar');
  
      calendar = new FullCalendar.Calendar(calendarEl, {
      eventClick: function(info) {  //function to run when a event on the callender is clicked
        var eventObj = info.event;
          var recipe = eventObj._def.extendedProps.recipe.recipe
          openRecipeModal(null, {recipe}) //open the modal and pass in the data from the event clicked
      },
      initialView: 'dayGridMonth',
      initialDate: dayjs().format('YYYY-MM-DD'),  //callender options
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      events: createCalData(JSON.parse(localStorage.getItem("plannedMeals")) || []) //get the data from local stotage and pass it into callander
    });
    calendar.render();
  };

  function createCalData(ls){   //function to convert local storage data into a format/shape that can be read by the callendar
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

