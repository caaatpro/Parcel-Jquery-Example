import "./jquery-global.js";
import $ from "jquery";
import "pg-calendar";

console.log($('body'));
$(function() {
  $('.calendar').pignoseCalendar();
});