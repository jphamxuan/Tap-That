



  // Side Nav Bar - Initialize collapse button
$(".button-collapse").sideNav();

$(document).ready(function() {
  $('.parallax').parallax();
});

$("#download-button").on("click", function(){
  console.log("yay")
  $(".input-field").empty();
  $("#download-button").remove();
  }
);