//define functions here
function pressIt(){
  $('window').on('keydown', function(e){
    if (e.key === 'g'){
      alert("You pressed the g key.")
    }
  })
}
$(document).ready(function(){

// call functions here
pressIt()
});
