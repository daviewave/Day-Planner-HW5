$(document).ready(function () {
  //DEPENDENCIES
  //DATA
  //target html div id that will display daily planner rows and contents and set to empty
  var $dailyPlanner = $("#planner-section");
  $dailyPlanner.empty();

  //use moment.js to get the current day
  const currentDay = moment().format("MMMM Do YYYY");

  //target html p id that will display todays current date to the header and use variable holding date found with moment.js
  var $currentDayHeader = $("#currentDay");
  $currentDayHeader.text(currentDay);

  //variable that stores the current hour (in 12 hour time format)
  var currentHour = moment().format("h");
  console.log(currentHour);

  //if the user saves a task, will need an array to store it
  var savedTasks = [];

  //FUNCTIONS
  /* PSUEDOCODE // 
// 1. Build each row of the daily planner for each hour in the work day 9-5
    1.A. add a time for each row
    1.B. add a text-input ability in each row
    1.C. add a save input button in each row 
*/

  /* 2. Determinw what hour of the day it currently is 
    2.A. if the current hour isnt between 9-5 make the hour row input color normal color
    2.B. if the current hour is between 9-5 make that row color red
    2.C. make all hours after current hour red
    */

  //USER-INTERACTIONS
});
