$(document).ready(function () {
  //DEPENDENCIES
  var $dailyPlanner = $("#planner-section"); //target html div that will display daily planner rows and contents
  $dailyPlanner.empty();

  //DATA
  const currentDay = moment().format("MMMM Do YYYY");
  console.log(currentDay);

  var $currentDayHeader = $("#currentDay");
  $currentDayHeader.text(currentDay);

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
