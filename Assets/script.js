//contribution: https://github.com/mmeii/work-day-scheduler
//contribution: https://github.com/sylviaprabudy/work-day-scheduler

  //TODO: dayjs, display current date, sets interval every second
function displayTime(){
  $("#currentDay").text(moment().format("dddd MMMM Do YYYY hh:mm:ss A"));
  }

//TODO: wrapping function to ensure code doesn't run until browser renders
$(function () {

  //variables
  var saveBtn = $(".saveBtn");
  
  //functions
  function timeBlockColor() {
    var hour = moment().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < hour) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
      else if (blockTime === hour) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      }
  })
  }

  //TODO: click event listener using 'this'
  saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    var toDoList = $('#toDo');
    localStorage.setItem(time, plan);
    $('#toDoHeader').show();
    toDoList.append('<li>' + time + " " + plan + '</li>');
  });

  function usePlanner() {
    //TODO: setting value of local storage
    $(".hour").each(function () {
      var currHour = $(this).text();
      var currPlan = localStorage.getItem(currHour);

      if (currPlan !== null) {
        $(this).siblings(".plan").val(currPlan);
      }
    });
  }

  timeBlockColor();
  usePlanner();

});
setInterval(displayTime, 1000);