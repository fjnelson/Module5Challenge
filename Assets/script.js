//contribution: https://github.com/mmeii/work-day-scheduler

//TODO: wrapping function to ensure code doesn't run until browser renders
$(function () {
  //variables
  var saveBtn = $(".saveBtn");

  //functions

  //TODO: display current date
  $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

  function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function () {
      var currHour = parseInt($(this).attr("id"));
      // TODO: Adding past, present, or future class to each time
      if (currHour > hour) {
        $(this).addClass("future");
      } else if (currHour === hour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }

  //TODO: click event listener using 'this'
  saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
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
