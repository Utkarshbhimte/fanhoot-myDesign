$(document).ready(function(){

  $('#LoginModal, #RegisterModal').on('shown.bs.modal', function () {
    console.log("yes");
    $('#myInput').focus()
  })

});
