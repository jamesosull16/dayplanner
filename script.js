$(document).ready(function () {
  //FUNCTIONS

  //updating the current day and time
  var update = function () {
    //using moment() to retrieve current day and time
    //wanted to include the time and have it dynamically updated
    $("#currentDay").html(moment().format("dddd, MMM, Do YYYY, h:mm:ss a"));
  };
  //calling the update function and setting the interval to every second
  update();
  setInterval(update, 1000);

  //function for different colors dependent upon what time
  //Date object, using getHours()
  var today = new Date(Date.now());
  var hours = today.getHours();
  var htmlTimeBlock;
  $(".description").each(function () {
    //parseInt to ensure the string is returned as an integer
    htmlTimeBlock = parseInt($(this).attr("data-time"));
    //adding 12 to anytime time thats less than 7
    if (htmlTimeBlock < 7) htmlTimeBlock += 12;
    //if/else to determine what color should be displayed
    if (hours > htmlTimeBlock) {
      $(this).addClass("past");
    } else if (hours < htmlTimeBlock) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
    //ensuring that the data input by the user is saved to the specific time block
    var saveData = window.localStorage.getItem(htmlTimeBlock);
    $(this).val(saveData);
  });

  //..saveBtn - event listener to save to local storage once clicked
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    //.prev gets the immeadiately precceding sibling element
    var value = $(this).prev().val();
    var timeBlock = parseInt($(this).prev().attr("data-time"));
    if (timeBlock < 7) timeBlock += 12;
    //saves the value entered when the save button is clicked
    window.localStorage.setItem(timeBlock, value);
  });
});
