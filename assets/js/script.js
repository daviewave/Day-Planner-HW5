//DEPENDENCIES
//targeted html elements to edit
var $dailyPlanner = $("#planner-section");
var $currentDayHeader = $("#currentDay");

//DATA
//use moment.js to get the current day and hour
const currentDay = moment().format("MMMM Do YYYY");
var currentHour = moment().format("h");
var currentMilitaryHour = moment().format("H");

// console.log(currentHour);
//if the user saves a task, will need an array to store it
var savedTasks = [];
var tasksInLocalStorage = JSON.parse(
  localStorage.getItem("tasksInLocalStorage")
);
//image that is displayed in right column that allows the user the ability to save input
// const saveImg = "./assets/images/save-solid.svg";

//function called when page loads
$(document).ready(function () {
  setTodaysDate();
  clearPlanner();
  buildDailyPlanner();
});

//FUNCTIONS
/* PSUEDOCODE // 
// 1. Build each row of the daily planner for each hour in the work day 9-5
    1.A. add a time for each row
    1.B. add a text-input ability in the middle of each row where the user will be able to enter tasks for that particular hour
    1.C. add a save input button in each row 
*/ /* 2. Determinw what hour of the day it currently 
    2.A. if the current hour isnt between 9-5 make the hour row input color normal color
    2.B. if the current hour is between 9-5 make that row color red
    2.C. make all hours after current hour red
    */

//Helper functions
function setTodaysDate() {
  $currentDayHeader.text(currentDay);
}

function clearPlanner() {
  $dailyPlanner.empty();
}

function buildDailyPlanner() {
  //since planner will only contain work-day hours, need 9 rows (9-5)
  for (var hourOnPlanner = 9; hourOnPlanner < 18; hourOnPlanner++) {
    //1.A. add 9 rows to the planner, 1 for each day
    var $rowContainer = $("<div>");
    $rowContainer.addClass("row");
    $rowContainer.attr("index", hourOnPlanner);

    //calls helper functions to add each portion of the daily planner rows and determines the color based on the time of day
    addTimeColumnToRow($rowContainer);
    addInputAbilityColumnToRow($rowContainer);
    addSaveButtonToRow($rowContainer);
    addColorToRows($rowContainer, hourOnPlanner);

    //Last step is to add the row and all its new contents to the daily planner
    $dailyPlanner.append($rowContainer);
  }
}

function addTimeColumnToRow($row) {
  var rowIndex = $row.attr("index");
  //need to start building each column component the components for each row
  //1.A. add a time for each row -- need to append
  var $timeColumn = $("<div>");
  $timeColumn.addClass("col-md-2");

  //1.A. add a <p> to add the hour of the row to the text
  var $timeColumnText = $("<p>");
  $timeColumnText.addClass("hour");

  //1.A. determine whether the hour of the day is "am" or "pm" and adds the fixed hour for each row with the correct time
  var dayOrNight = "";
  if (rowIndex < 12) {
    dayOrNight = " am";
    $timeColumnText.text(`${rowIndex} ${dayOrNight}`);
  } else {
    dayOrNight = " pm";
    if (rowIndex <= 12) {
      $timeColumnText.text(`${rowIndex} ${dayOrNight}`);
    } else {
      $timeColumnText.text(`${rowIndex - 12} ${dayOrNight}`);
    }
  }

  //1.A. append text to time column
  $timeColumn.append($timeColumnText);

  //1.A. append timeColumn to the row
  $row.append($timeColumn);
}

function addInputAbilityColumnToRow($row) {
  var rowIndex = $row.attr("index");
  /*1.B. add a text-input ability in the middle of each row where the user will be able to enter tasks for that particular hour*/
  var $taskInputColumn = $("<input>");
  $taskInputColumn.addClass("textarea");
  $taskInputColumn.addClass("col-md-9");
  $taskInputColumn.attr("id", `getInputFromRow-${rowIndex}`);

  //1.B. will need to append the input area to row
  $row.append($taskInputColumn);
}

function addSaveButtonToRow($row) {
  var rowIndex = $row.attr("index");
  /*1.C. add a save input button to the right of the text input area within each row -- button click will need to handle storing input to local storage */
  var $saveInputColumn = $("<button>");
  $saveInputColumn.addClass("far fa-save saveBtn");
  $saveInputColumn.addClass("col-md-1");
  $saveInputColumn.attr("buttonNumber", rowIndex);

  //1.C. will need to append the input area to row
  $row.append($saveInputColumn);
}

function addColorToRows($row, fixedPlannerHour) {
  if (fixedPlannerHour < currentMilitaryHour) {
    $row.addClass("past");
  } else if (fixedPlannerHour > currentMilitaryHour) {
    $row.addClass("present");
  } else {
    $row.addClass("future");
  }
}

//User Interactions
//when user clicks save need to handle in a function
$(document).on("click", "button", function (event) {
  event.preventDefault();
  var buttonIndex = $(this).attr("buttonNumber");
  console.log(buttonIndex);
  var rowOfInput = "#getInputFromRow-" + buttonIndex;
  console.log(rowOfInput);
  var $plannerTask = $(rowOfInput).val();
  console.log($plannerTask);

  savedTasks[buttonIndex] = $plannerTask;
  console.log(savedTasks);
});
