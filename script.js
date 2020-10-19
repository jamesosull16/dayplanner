//VARIABLE DECLATION

var currentDay = document.querySelector("#currentDay");
var date = null;


//FUNCTIONS

//updating the current day and time
var update = function () {
    //using moment() to retrieve current day and time
  (date = moment()),
    currentDay.html(date.format("dddd, MMM, Do YYYY, h:mm:ss a"));
};
//setting the var currentDay to the id and updating the time every second
$(document).ready(function () {
  currentDay = $("#currentDay");
  //calling the update function
  update();
  setInterval(update, 1000);
});


