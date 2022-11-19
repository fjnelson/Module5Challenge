//contribution: https://github.com/mmeii/work-day-scheduler
//contribution: https://github.com/sylviaprabudy/work-day-scheduler

//TODO: dayjs, display current date, sets interval every second
//outside of function wrap?
function displayTimeTop() {
  $("#currentDay").text(dayjs().format("dddd MMMM D, YYYY hh:mm:ss A"));
}

//TODO: wrapping function to ensure code doesn't run until browser renders
$(function () {
  //variables
  let saveBtn = $(".saveBtn");

  //functions
  function timeBlockChangeColor() {
    let scheduleHour = dayjs().hour();

    $(".time-schedule").each(function () {
      let timeSchedule = parseInt($(this).attr("id").split("hour")[1]);
      // To check the time and add the classes for background indicators
      if (timeSchedule < scheduleHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeSchedule === scheduleHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  //TODO: click event listener using 'this'
  saveBtn.on("click", function () {
    let timeHour = $(this).siblings(".hour").text();
    let planText = $(this).siblings(".plan").val();
    let toDoList = $("#toDo");
    localStorage.setItem(timeHour, planText);
    $("#toDoHeader").show();
    toDoList.append("<li>" + timeHour + " " + planText + "</li>");
  });

  function usePlanner() {
    //TODO: getting value out of local storage, if one exists
    $(".hour").each(function () {
      let currHour = $(this).text();
      let currPlan = localStorage.getItem(currHour);

      if (currPlan !== null) {
        $(this).siblings(".plan").val(currPlan);
        $("#toDoHeader").show();

      }

    });
  }

  usePlanner();
  timeBlockChangeColor();
});
setInterval(displayTimeTop, 1000);
