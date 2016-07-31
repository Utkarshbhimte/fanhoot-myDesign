$(document).ready(function(){
  
  $('#myModal').on('shown.bs.modal', function () {
    console.log("yes");
    $('#myInput').focus()
  })

});
