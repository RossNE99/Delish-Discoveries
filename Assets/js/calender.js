
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
    {
      title: 'Long Event',
      start: '2023-11-07',
      end: '2023-11-10'
    },
    {
      groupId: '999',
      title: 'Repeating Event',
      start: '2023-11-09T16:00:00'
    },
    {
      title: 'Meeting',
      start: '2023-11-12T14:30:00'
    },
    {
      title: 'Birthday Party',
      start: '2023-11-13T07:00:00'
    },
    {
        title: 'Birthday Party',
        start: '2023-11-13T07:00:00'
      },
    {
        title: 'Rice-Milk Rice Pudding', 
        start:  '2024-02-02'
    },
    {
      title: 'Click for Google',
      url: 'https://google.com/',
      start: '2023-11-28'
    }
    
  ];

var addToCalenderBtn = $("#addToCalendarBtn");

addToCalenderBtn.on("click", writeOnCalendar)

function writeOnCalendar() {
    eventsArray.push(
        {
            title: "Rice-Milk Rice Pudding", 
            start:  dayjs().format('YYYY-MM-DD')
        }
    )

      }

console.log(dayjs().format('YYYY-MM-DD'));