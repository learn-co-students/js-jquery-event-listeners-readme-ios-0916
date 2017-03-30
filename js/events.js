//define functions here
function pressIt() {
  $("input:first").on("keydown", function(e) {
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $("form").on("submit", function(e) {
    alert("Your form is going to be submitted now.")
  })
}




function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

$(document).ready(function(){
// call functions here

});
