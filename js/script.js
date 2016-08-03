$(document).ready(function(){



  $('#LoginModal, #RegisterModal').on('shown.bs.modal', function () {
    console.log("yes");
    $('#myInput').focus()
  })




});
$(document).on('click', '.glyphicon-menu-down', function(event){
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top
   }, 1000);
});
