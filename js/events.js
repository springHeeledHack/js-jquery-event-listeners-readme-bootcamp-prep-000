//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}
function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty')
    $(this).css('border', 'solid 25px red')
  })
}
function pressIt(){
  $('#typing').on('keydown', function(e){
    if (e.which == 71){ 
      alert("You pressed the g key.")
    } 
  })
}
$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});
