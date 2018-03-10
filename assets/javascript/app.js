



  // Side Nav Bar - Initialize collapse button
$(".button-collapse").sideNav();

$(document).ready(function() {
  $('.parallax').parallax();
  $('select').material_select();
});

$("#download-button").on("click", function(){
  console.log("yay")
  $(".input-field").empty();
  $("#download-button").remove();
  }
);