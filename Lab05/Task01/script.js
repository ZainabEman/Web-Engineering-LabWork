// script.js

$(document).ready(function() {
    $("#toggleBtn").click(function() {
      $("#myDiv").fadeToggle(300, function() {
        if ($(this).is(":visible")) {
          $("#toggleBtn").text("Hide");
        } else {
          $("#toggleBtn").text("Show");
        }
      });
    });
  });
  