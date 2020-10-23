//VARIABLE DECLATION
$(document).ready(function () {
  var saveBtn = $(".saveBtn");
  var description = $(".description");

  //FUNCTIONS

  //updating the current day and time
  update = function () {
    //using moment() to retrieve current day and time
    $("#currentDay").html(moment().format("dddd, MMM, Do YYYY, h:mm:ss a"));
  };
  //calling the update function and setting the interval to every second
  update();
  setInterval(update, 1000);

  //function for different colors dependent upon what time

  var hours = date.getHours();
  var htmlTimeBlock;
  $(".description").each(function () {
    htmlTimeBlock = parseInt($(this).attr("data-time"));
    if (hours > htmlTimeBlock) {
      $(this).addClass("past");
    } else if (hours < htmlTimeBlock) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });

  //..saveBtn - event listener to save to local storage once clicked
  $(".saveBtn").on("click", function () {});
});
