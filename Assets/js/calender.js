//initialView: 'dayGridWeek' //timeGridDay, dayGridWeek, listWeek, dayGridMonth
var calendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
      calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: dayjs().format('YYYY-MM-DD'),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      },
      events: eventsArray
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
    
  ]


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
